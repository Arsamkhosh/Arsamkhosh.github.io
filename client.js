const socket = io();
let username = null;

function register() {
  const user = document.getElementById('authUser').value.trim();
  const pass = document.getElementById('authPass').value.trim();
  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user, password: pass })
  }).then(res => res.json()).then(data => {
    if (data.error) {
      document.getElementById('authError').textContent = data.error;
    } else {
      login();
    }
  });
}

function login() {
  const user = document.getElementById('authUser').value.trim();
  const pass = document.getElementById('authPass').value.trim();
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: user, password: pass })
  }).then(res => res.json()).then(data => {
    if (data.error) {
      document.getElementById('authError').textContent = data.error;
    } else {
      username = user;
      socket.emit('login', username);
      document.getElementById('auth').style.display = 'none';
      document.getElementById('chat').style.display = 'block';
      document.getElementById('userDisplay').textContent = username;
    }
  });
}

function sendPublic() {
  const text = document.getElementById('messageInput').value.trim();
  if (text) {
    socket.emit('sendPublic', text);
    document.getElementById('messageInput').value = '';
  }
}

function sendPrivate() {
  const to = document.getElementById('privateTo').value.trim();
  const text = document.getElementById('privateInput').value.trim();
  if (to && text) {
    socket.emit('sendPrivate', { to, text });
    document.getElementById('privateInput').value = '';
  }
}

socket.on('message', msg => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = `${msg.user}: ${msg.text}`;
  document.getElementById('messages').appendChild(div);
});

socket.on('private', msg => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = `🔒 پیام خصوصی از ${msg.from}: ${msg.text}`;
  document.getElementById('messages').appendChild(div);
});
