import React, { useState, useEffect } from "react";
import Posts from "./component/Posts";
import "./App.css";

function App() {
  const [isOnline, setOnlineStatus] = useState(true);

  // https://stackoverflow.com/questions/44756154/progressive-web-app-how-to-detect-and-handle-when-connection-is-up-again
  useEffect(() => {
    const setFromEvent = function (event: any) {
      if (event.type === "online") {
        setOnlineStatus(true);
      } else if (event.type === "offline") {
        setOnlineStatus(false);
      }
    };

    window.addEventListener("online", setFromEvent);
    window.addEventListener("offline", setFromEvent);

    return () => {
      window.removeEventListener("online", setFromEvent);
      window.removeEventListener("offline", setFromEvent);
    };
  });

  return (
    <div className="App">
      {!isOnline ? (
        <div className="offline-warning">
          You are currently offline. <br /> Access to the application might be
          limited.
        </div>
      ) : null}

      <header className="App-header">
        <h1>React PWA online/offline demo</h1>
      </header>
      <section className="App-content">
        <div>You are {navigator.onLine === true ? "online" : "offline"}</div>

        <div className="data">
          <Posts online={isOnline} />
        </div>
      </section>
    </div>
  );
}

export default App;
