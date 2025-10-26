let username = localStorage.getItem("username");

function setUsername() {
  const input = document.getElementById("usernameInput").value.trim();
  if (input.length < 3) {
    alert("نام کاربری باید حداقل ۳ حرف باشد.");
    return;
  }
  localStorage.setItem("username", input);
  username = input;
  showChat();
}

function showChat() {
  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
  document.getElementById("usernameDisplay").textContent = username;
  loadMessages();
}

function logout() {
  localStorage.removeItem("username");
  location.reload();
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  messages.push({ user: username, text });
  localStorage.setItem("messages", JSON.stringify(messages));
  input.value = "";
  loadMessages();
}

function loadMessages() {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = `${msg.user}: ${msg.text}`;
    messagesDiv.appendChild(div);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

if (username) showChat();
