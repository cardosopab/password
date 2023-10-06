import { useState } from "react";

function App() {
  const [password, setPassword] = useState(
    "Welcome, to my Random Password Generator!"
  );
  const [isCopyVisible, setIsCopyVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  function handleRandom() {
    let stringBuffer = "";
    for (let i = 0; i < 18; i++) {
      const randAlpha = Math.floor(Math.random() * 26) + 97;
      const randNum = Math.floor(Math.random() * 10);
      let char;
      if (i % 6 == 0) {
        char = String.fromCharCode(randAlpha - 32);
      } else if (i % 6 == 5) {
        char = i == 17 ? randNum.toString() : randNum + "-";
      } else {
        char = String.fromCharCode(randAlpha);
      }
      stringBuffer += char;
    }
    console.log(stringBuffer);
    if (!isCopyVisible) {
      console.log("setting true");
      setIsCopyVisible(true);
    }
    setPassword(stringBuffer);
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        console.log("Text " + password + " copied to clipboard");
        setIsNotificationVisible(true);
        setTimeout(() => {
          setIsNotificationVisible(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  }

  return (
    <>
      {/* Header */}
      <div id="passwordDiv">{password}</div>
      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: isCopyVisible ? "space-between" : "center",
        }}
      >
        <button id="randomButton" onClick={() => handleRandom()}>
          Random Password
        </button>
        <button
          id="copyButton"
          style={{ display: isCopyVisible ? "block" : "none" }}
          onClick={() => handleCopy()}
        >
          Copy Password
        </button>
      </div>
      {/* Modal */}
      <div
        id="copyNotification"
        style={{ display: isNotificationVisible ? "block" : "none" }}
      >
        "{password}" Copied!
      </div>
    </>
  );
}

export default App;
