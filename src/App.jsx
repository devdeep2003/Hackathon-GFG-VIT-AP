import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import './App.css'
import Hospitals from "./components/Hospitals/Hospitals";
import Value from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import NewsletterForm from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className = "App">

      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>

      </div>
      <Hospitals/>
     <Footer/>
    </div>
  );
}
export default App;
