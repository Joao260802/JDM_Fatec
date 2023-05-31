/**
 * alerta.
 * Cria um alerta no padrão do Bootstrap 5
 * @param {string} mensagem Mensagem de Alerta
 * @param {string} tipo Tipo do Alerta do Bootstrap
 * @return {string} Retorna uma div com o conteúdo do alerta
 */
function alerta(mensagem, tipo){
    let mensagemAlerta = document.getElementById('msgAlerta')
    let wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-'+tipo +
    ' alert-dismissible m-3" role="alert">' +
    mensagem +
    '<button type="button" class="btn-close"' +
    'data-bs-dismiss="alert"></button></div>'
    mensagemAlerta.append(wrapper)
}