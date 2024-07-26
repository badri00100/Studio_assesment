import "./App.css";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import Location from "./components/Location";
import Menu from "./components/Menu";
import RightBar from "./components/RightBar";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftBar />
      <RightBar />
      <Section />
      <Community />
      <Location />
      <Menu />
      <Form />
      <Footer />
      {/* <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <h2>MEET OUR COMMUNITY</h2>
            <div className="footer-images">
              <img src="https://via.placeholder.com/100x100" alt="Image 1" />
              <img src="https://via.placeholder.com/100x100" alt="Image 2" />
              <img src="https://via.placeholder.com/100x100" alt="Image 3" />
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
