import Header from "./components/Header";
import {BrowserRouter ,Routes , Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Download from "./pages/Download";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import AboutPage from "./pages/AboutPage";
import Stories from "./pages/Stories";
import Android from "./pages/Android";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Routes >
        <Route path='/' element={<Homepage/>} />
        <Route path='/download' element={<Download/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/security' element={<Security/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/stories' element={<Stories/>} />
        <Route path='/android' element={<Android/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
