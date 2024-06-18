import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ImageOne from "./components/ImageOne";
import ImageThree from "./components/ImageThree";
import ImageTwo from "./components/ImageTwo";

function App() {
  return (
    <>
      <Header />
      <About />
      <Contact />

      <h1 style={{ textAlign: "center" }}>
        Creating a Functional React Component Gallery
      </h1>

      <div className="gallery">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </>
  );
}

export default App;
