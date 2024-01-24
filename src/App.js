import logo from "./logo.svg";
import "./App.css";
import HeroBanner from "./Components/HeroBanner";
import Spacer from "./Components/Spacer";
import Navbar from "./Components/Navbar";


function App() {
    return (
        <div className="App">
            <HeroBanner />
            <Navbar />
            <Spacer />
        </div>
    );
}

export default App;
