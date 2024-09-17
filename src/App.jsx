import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PropertyDetail from "./components/PropertyDetail";
import sampleProperty from "./components/property";
import RealEstatePage from "./components/RealEstatePage";
import Header from "./components/Header";
import { DarkModeProvider } from './components/DarkModeContext';


function App() {
  return (
    <div className="App">
      <RealEstatePage />
    </div>
    
  );
}

export default App;
