import "./App.css";
import { SuccessAlert, ErrorAlert, InfoAlert, WarningAlert } from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <ErrorAlert />
        <WarningAlert />
        <InfoAlert />
        <SuccessAlert />
      </div>
    </div>
  );
}

export default App;
