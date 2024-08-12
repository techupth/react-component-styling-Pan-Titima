import "./App.css";
import { SuccessAlert, ErrorAlert, InfoAlert, WarningAlert } from "./components/Alert.jsx";
import { Button } from  "./components/Button.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="primary" text="Primary" />
        <Button color="secondary" text="Secondary"/>
        
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
