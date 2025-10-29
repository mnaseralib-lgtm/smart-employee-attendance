import React, { useState, useCallback } from "https://esm.sh/react@18.2.0";
import Scanner from "./components/Scanner.js";
import Reports from "./components/Reports.js";
import Header from "./components/Header.js";

const App = () => {
  const [view, setView] = useState("SCANNER");
  const [scanCount, setScanCount] = useState(0);

  const handleScanSuccess = useCallback(() => {
    setScanCount((prevCount) => prevCount + 1);
  }, []);

  return (
    React.createElement(
      "div",
      { className: "bg-gray-100 min-h-screen font-sans text-gray-800" },
      React.createElement(Header, { setView, currentView: view, scanCount }),
      React.createElement(
        "main",
        { className: "p-4 sm:p-6 pb-28" },
        view === "SCANNER" && React.createElement(Scanner, { onScanSuccess: handleScanSuccess }),
        view === "REPORTS" && React.createElement(Reports, null)
      )
    )
  );
};

export default App;
