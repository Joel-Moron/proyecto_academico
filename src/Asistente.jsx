import React, { useEffect } from 'react';

const Asistente = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "84c273b5-3bc9-4724-bff7-21ad4a784485",
      region: "au-syd",
      serviceInstanceID: "e322a0b7-49b4-4ba9-9f62-f88d3c94e5aa",
      onLoad: function(instance) { instance.render(); }
    };

    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* You can add any additional content or components here */}
    </div>
  );
};

export default Asistente;
