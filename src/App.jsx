import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import OurModels from "./Components/OurModels/OurModels";

function App() {
  return <div className="container">
    <Header/>
    <About/>
    <OurModels/>
  </div>;
}

export default App;
