const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kirim request ke server untuk proses login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // Login berhasil, redirect ke halaman game
            window.location.href = '/game';
        } else {
            // Login gagal, tampilkan pesan error
            alert(data.message);
        }
    })
    .catch((error) => console.error(error));
});
