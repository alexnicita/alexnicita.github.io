import React, { useEffect } from 'react';

import WinXP from 'WinXP';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      !function () {var reb2b = window.reb2b = window.reb2b || [];
      if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];
      reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);
      args.unshift(method);reb2b.push(args);return reb2b;};};
      for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}
      reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;
      script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/1N5W0H0P2PO5.js.gz";
      var first = document.getElementsByTagName("script")[0];
      first.parentNode.insertBefore(script, first);};
      reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("1N5W0H0P2PO5");}();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <WinXP />;
};

export default App;
