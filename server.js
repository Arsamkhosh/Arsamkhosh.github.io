const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.use(bodyParser.json());

const users = {}; // { username: password }
const sockets = {}; // { username: socket.id }

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).json({ error: 'نام کاربری قبلاً ثبت شده' });
  }
  users[username] = password;
  res.json({ success: true });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] !== password) {
    return res.status(401).json({ error: 'نام کاربری یا رمز اشتباه است' });
  }
  res.json({ success: true });
});

io.on('connection', socket => {
  let username = null;

  socket.on('login', name => {
    username = name;
    sockets[username] = socket.id;
    io.emit('message', { user: 'سیستم', text: `${username} وارد شد` });
  });

  socket.on('sendPublic', text => {
    if (username) {
      io.emit('message', { user: username, text });
    }
  });

  socket.on('sendPrivate', ({ to, text }) => {
    const targetSocket = sockets[to];
    if (targetSocket) {
      io.to(targetSocket).emit('private', { from: username, text });
    }
  });

  socket.on('disconnect', () => {
    if (username) {
      delete sockets[username];
      io.emit('message', { user: 'سیستم', text: `${username} خارج شد` });
    }
  });
});

server.listen(3000, () => {
  console.log('سرور روی پورت 3000 اجرا شد');
});
