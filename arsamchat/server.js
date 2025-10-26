const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const users = new Map();       // username -> {passwordHash, socketId}
const sockets = new Map();     // socketId -> username
const recentMessages = [];     // ذخیره آخرین 100 پیام

function pushMessage(msgObj) {
  recentMessages.push(msgObj);
  if (recentMessages.length > 100) recentMessages.shift();
}

// ثبت‌نام کاربر
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json({ ok: false, error: 'نام کاربری و رمز لازم است.' });
  if (users.has(username)) return res.json({ ok: false, error: 'این نام کاربری قبلاً ثبت شده.' });

  const hash = await bcrypt.hash(password, 10);
  users.set(username, { passwordHash: hash, socketId: null });
  return res.json({ ok: true });
});

// ورود کاربر
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json({ ok: false, error: 'نام کاربری و رمز لازم است.' });
  if (!users.has(username)) return res.json({ ok: false, error: 'این نام کاربری ثبت نشده.' });

  const user = users.get(username);
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.json({ ok: false, error: 'رمز عبور اشتباه است.' });

  return res.json({ ok: true });
});

// WebSocket
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('registerSocket', (username) => {
    if (!users.has(username)) return;
    const user = users.get(username);
    user.socketId = socket.id;
    sockets.set(socket.id, username);
    io.emit('user_list', Array.from(users.keys()));
  });

  socket.on('send_message', (payload, cb) => {
    const from = sockets.get(socket.id);
    if (!from) return cb && cb({ ok: false, error: 'شما وارد نشده‌اید.' });

    let { to, text } = payload || {};
    text = String(text || '').trim();
    if (!text) return cb && cb({ ok: false, error: 'پیام نمی‌تواند خالی باشد.' });

    const msg = {
      id: Date.now() + '_' + Math.random().toString(36).slice(2, 8),
      from,
      to: to || null,
      text,
      ts: new Date().toISOString()
    };

    if (!to) {
      io.emit('message', msg);
      pushMessage(msg);
      return cb && cb({ ok: true });
    } else {
      if (!users.has(to) || !users.get(to).socketId) return cb && cb({ ok: false, error: 'گیرنده آنلاین نیست.' });
      const targetSocketId = users.get(to).socketId;
      io.to(targetSocketId).emit('message', msg);
      socket.emit('message', msg);
      pushMessage(msg);
      return cb && cb({ ok: true });
    }
  });

  socket.on('get_users', (cb) => cb && cb(Array.from(users.keys())));

  socket.on('disconnect', () => {
    const username = sockets.get(socket.id);
    if (username) {
      const user = users.get(username);
      if (user) user.socketId = null;
      sockets.delete(socket.id);
      io.emit('user_list', Array.from(users.keys()));
      console.log('User disconnected:', username);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

