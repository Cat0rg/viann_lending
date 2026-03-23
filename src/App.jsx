import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import OurModels from "./Components/OurModels/OurModels";
import OurStore from "./Components/OurStore/OurStore";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <OurModels />
      <OurStore />
      <Footer />
    </div>
  );
}

export default App;
