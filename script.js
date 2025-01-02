document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const contactMethod = document.getElementById('contact-method').value;

    
    function enviarEmail() {
        const emailDestino = 'henriquefdalves15@gmail.com'; 
        const assunto = 'Formulário de Contato';
        let corpoEmail = `Nome: ${nome}\n`;
        corpoEmail += `Empresa: ${empresa}\n`;
        corpoEmail += `Telefone: ${telefone}\n`;
        corpoEmail += `Email: ${email}\n`;
        
        if (mensagem) {
            corpoEmail += `Mensagem: ${mensagem}\n`;
        }

        const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
        window.location.href = mailtoLink;
    }

    
    function enviarWhatsApp() {
        const numeroWhatsApp = '5537999386472'; 
        let texto = `Nome: ${nome}\n`;
        texto += `Empresa: ${empresa}\n`;
        texto += `Telefone: ${telefone}\n`;
        texto += `Email: ${email}\n`;
        
        if (mensagem) {
            texto += `Mensagem: ${mensagem}\n`;
        }

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(urlWhatsApp, '_blank');
    }

    
    if (contactMethod === 'email') {
        enviarEmail();
    } else if (contactMethod === 'whatsapp') {
        enviarWhatsApp();
    }

    exibirMensagemConfirmacao();
});

function exibirMensagemConfirmacao() {
   
    const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
    mensagemConfirmacao.style.display = 'block';

  
    setTimeout(function() {
        mensagemConfirmacao.style.display = 'none';
    }, 5000); 
}
