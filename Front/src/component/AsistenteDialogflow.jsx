import React, { useEffect } from 'react';

const AsistenteDialogflow = () => {
  const chatBotStyles = `
  df-messenger {
    --df-messenger-bot-message: #ff9263; /* El color de fondo de la burbuja para los mensajes del agente */

    --df-messenger-user-message: #ff9263; /* El color de fondo de la burbuja para los mensajes del usuario */

    --df-messenger-font-color: #ffffff; /* El color de fuente para los mensajes */

    --df-messenger-send-icon: #ff9263; /* El color del ícono de envío en la casilla de entrada de texto */

    --df-messenger-button-titlebar-color: #ff9263; /* El color del botón flotante y de la barra de título del cuadro de chat */

    --df-messenger-button-titlebar-font-color: #ffffff; /* El color de fuente del título "NOMBRE DEL BOT" en la barra de título */

    --df-messenger-chat-background-color: #ffffff; /* El color de fondo del cuadro de chat */

    --df-messenger-input-box-color: #ffffff; /* El color de fondo de la casilla de entrada de texto */

    --df-messenger-input-font-color: #000000; /* El color de fuente para la casilla de entrada de texto */

    --df-messenger-input-placeholder-font-color: #1a1a1a; /* El color de fuente para el texto del marcador de posición en la casilla de entrada de texto */

    --df-messenger-minimized-chat-close-icon-color: #ffffff; /* El color del ícono de cierre en la vista del chat cerrado */
  }
  `;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dfMessengerSettings = {
        chatTitle: 'Rodrigo',
        agentId: '390f6923-bb93-479f-b15b-c0698698f3a8',
        languageCode: 'es',
      };
    };
  }, []);

  return (
    <div>
        <style>{chatBotStyles}</style>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
        chat-icon="https://codexceleste.com/chatbotsOld/core/images/zaroc1.png"
        intent="WELCOME"
        chat-title="Rodrigo"
        agent-id="390f6923-bb93-479f-b15b-c0698698f3a8"
        language-code="en"
        ></df-messenger>
    </div>
  );
};

export default AsistenteDialogflow;
