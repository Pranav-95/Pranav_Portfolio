import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Educations from "./pages/Educations/Educations";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/TechStack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Swing from 'react-reveal/Swing';
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {
 
  return (
    <>
    <ToastContainer />
    <MobileNav/>
     <Layout />
     <div className="container">
     <About />
     <Educations/>
     <Techstack/>
     <Projects/>
     <WorkExp />
     <Contact />
     </div>
     <div className="footer mb-3 ms-3 ">
     <Swing>
      <h5 className="text-center ">
        Made by Pranav &copy; 2023
      </h5>
      </Swing>
     </div>
     <ScrollToTop smooth color="white" style={{backgroundColor:'#138781',borderRadius:'80px'}}/>
     
    </>
  );
}

export default App;
