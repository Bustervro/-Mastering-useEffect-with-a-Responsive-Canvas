import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // I used an empty dependency array because this event listener only needs to be added one time when the component first loads.
    // If I left this out completely, the effect would run after every render and could keep adding extra event listeners.
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <div className={isMobile ? "page mobile-page" : "page desktop-page"}>
      <div className={isMobile ? "card mobile-card" : "card desktop-card"}>
        <h1>Responsive Card</h1>

        <p className="mode">
          Current Mode: {isMobile ? "Mobile" : "Desktop"}
        </p>

        <div className="size-box">
          <p>Width: {windowSize.width}px</p>
          <p>Height: {windowSize.height}px</p>
        </div>

        <p className="description">
          Resize the browser window to see the card update in real time.
        </p>
      </div>
    </div>
  );
}

export default App;
