import React, { useEffect } from 'react';

 

function Asistente() {

  useEffect(() => {

    window.watsonAssistantChatOptions = {

      integrationID: "3848d12b-27cb-4657-8522-f1b7aa24842d",

      region: "au-syd",

      serviceInstanceID: "6f966fc9-7eb1-4277-8480-63099f45f540",

      onLoad: function(instance) { instance.render(); }

    };

 

    const script = document.createElement('script');

    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";

    document.head.appendChild(script);

 

    return () => {

      // Cleanup: Remove the script when the component is unmounted

      document.head.removeChild(script);

    };

  }, []);

 

  return (

    <div>

      {/* You can add any other components or content here */}

    </div>

  );

}

 

export default Asistente;