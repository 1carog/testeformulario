document.addEventListener('DOMContentLoaded', function() {
    const moodMessageDisplay = document.getElementById('humor-msg');
    const emojiSpans = document.querySelectorAll('.emoji');
    
    // 1. Defina um objeto com as mensagens extras para cada emoji
    // A chave do objeto (ex: 'angry') deve corresponder à sua classe/identificador, 
    // ou usaremos a posição (índice) se as classes não forem exclusivas.
    
    // Usaremos a posição (index 0, 1, 2, 3, 4) para mapear as mensagens.
    const allExtraMessages = {
        // Mensagens para o 1º Emoji (Índice 0: Zangado)
        0: [
            "Respire fundo, vamos resolver isso juntos. 😤",
            "Lembre-se: a paciência é a chave! 🧘",
            "Que tal uma pausa rápida de 5 minutos?"
        ],
        // Mensagens para o 2º Emoji (Índice 1: Triste)
        1: [
            "Não desanime! Um dia ruim não define uma semana. 😔",
            "Vá para casa, descanse. Amanhã é um novo dia.",
            "Lembre-se das suas conquistas!"
        ],
        // Mensagens para o 3º Emoji (Índice 2: Neutro)
        2: [
            "Buscando o equilíbrio? Mantenha o foco nas prioridades. 🎯",
            "Tudo sob controle, mas com espaço para melhorar. 😉",
            "Um pouco mais de energia para a próxima hora!"
        ],
        // Mensagens para o 4º Emoji (Índice 3: Feliz)
        3: [
            "Que dia excelente! Você está com a energia no topo. ✨",
            "Continue assim! O sucesso depende dessa atitude. 🚀",
            "Seu sorriso é contagiante! Vamos bater a meta! 💯"
        ],
        // Mensagens para o 5º Emoji (Índice 4: Radiante)
        4: [
            "Se continuar assim, vai acabar contagiando todos com boas vibrações. 🎉",
            "Parabéns pelo desempenho, merece reconhecimento! A sua felicidade nos inspira. 🏆",
            "Energia total! Nada pode te parar hoje. Continue assim!"
        ]
    };

    if (moodMessageDisplay && emojiSpans.length > 0) {
        
        emojiSpans.forEach((emoji, index) => {
            // Inicializa um contador de cliques para CADA emoji
            emoji.clickCount = 0; 

            emoji.addEventListener('click', function() {
                
                // Limpa e adiciona a classe 'selected' (lógica de CSS)
                emojiSpans.forEach(e => e.classList.remove('selected'));
                this.classList.add('selected');

                const defaultMessage = this.getAttribute('data-msg');
                const messagesArray = allExtraMessages[index] || []; // Pega as mensagens do array
                
                let messageToShow = '';
                
                // Lógica de rotação de mensagens:
                // Se for o 1º clique (count 0), usa a mensagem padrão do data-msg.
                if (this.clickCount === 0) {
                    messageToShow = defaultMessage;
                } 
                // Se for o 2º clique ou mais (count > 0), usa o array de mensagens extras.
                else {
                    // O operador módulo (%) garante que ele volte ao início do array.
                    const extraIndex = (this.clickCount - 1) % messagesArray.length; 
                    messageToShow = messagesArray[extraIndex];
                }
                
                // Incrementa o contador para o próximo clique
                this.clickCount++; 

                // Exibe a mensagem
                if (messageToShow) {
                    moodMessageDisplay.textContent = messageToShow;
                }
            });
        });
    }
});