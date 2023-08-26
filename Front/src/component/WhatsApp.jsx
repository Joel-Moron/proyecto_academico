import { useEffect } from "react";

const WhatsApp = () => {
    useEffect(() => {
      window.onload = function(){
      (function(d, script) {
      script = d.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://w.app/widget-v1/8Qm4Lc.js';
      d.getElementsByTagName('head')[0].appendChild(script);
      }(document));
      };
    },[]);

    return(
        <></>
    )
    
}

export default WhatsApp;