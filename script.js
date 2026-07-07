function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (nome.trim().length < 3) {
        alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
        return false;
    }

    if (telefone.trim().length < 8) {
        alert("Por favor, insira um telefone válido.");
        return false;
    }

    alert("Formulário de " + nome + " enviado com sucesso! Nossa equipe entrará em contato.");
    return true;
}