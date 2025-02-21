document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Vai impedir o envio padrão do formulário

        // Obtenha os valores dos campos - validação básica
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Sai da função se algum campo estiver vazio
        }

        // Simulação de envio 
        console.log('Enviando dados:', { username, password });
        alert('Login realizado com sucesso!');

        // Limpe os campos após o envio (opcional)
        loginForm.reset();
    });
});
