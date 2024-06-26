import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { useEffect } from "react";
import Alert from "./Components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [backdropBlur, setBackdropBlur] = useState(false);

  useEffect(() => {
    setBackdropBlur(true); // Enable backdrop blur when alert is shown
    setShowAlert(true);

    const timeout = setTimeout(() => {
      setBackdropBlur(false); // Disable backdrop blur when alert is hidden
      setShowAlert(false);

    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showAlert && (
        <>
          <div className={backdropBlur ? "backdrop-blur" : ""}></div>
          <Alert
            message="Hi! Thanks for visiting my website! While you scroll through please keep in mind that this application is still in development and yet to be complete. Happy Scrolling!🎉"
            setShowAlert={setShowAlert}
          />
        </>
      )}
      <LandingPage />
    </>
  );
}

export default App;
