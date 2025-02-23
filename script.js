document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Vai impedir o envio padrão do formulário

       
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Sai da função se algum campo estiver vazio
        }

        
        console.log('Enviando dados:', { username, password });
        alert('Login realizado com sucesso!');

        loginForm.reset();
    });
});
