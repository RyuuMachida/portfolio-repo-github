function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "ariel" && password === "evan150410") {
    alert("Login berhasil!");
    window.location.href = "index1.html"; // redirect ke halaman login.html
  } else {
    alert("Username atau password salah!");
  }
}