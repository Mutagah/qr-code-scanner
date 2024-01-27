import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scannedResult, setScannedResult] = useState(null);

  useEffect(() => {
    const qrCodeScanner = new Html5QrcodeScanner("scanner-box", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 10,
    });

    function successScan(result) {
      qrCodeScanner.clear();
      setScannedResult(result);
      
      // NB: The scanned Result is null when the user uses the image option
      console.log(scannedResult)
    }

    function failedScan(error) {
      // Let the user know after some time of a close to 20 seconds that qr code is not visible.
      console.warn("Check your qr code quality");
    }

    qrCodeScanner.render(successScan, failedScan);
  }, []);

  return (
    <div className="scanner-container">
      <h1>Qr Code Scanner</h1>
      <div className="scan-section">
        {scannedResult ? (
          <div className="after-scan">
            {scannedResult}
          </div>
        ) : (
          <div id="scanner-box"></div>
        )}
      </div>
    </div>
  );
}
export default App;
