import logo from "./logo.svg";
import "./App.css";
import HeroBanner from "./Components/HeroBanner";
import Spacer from "./Components/Spacer";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
    return (
        <div className="App">
            <HeroBanner />
            <Navbar />
            <Spacer />
            <Footer />
        </div>
    );
}

export default App;
