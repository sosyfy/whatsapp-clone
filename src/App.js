import Header from "./components/Header";
import {BrowserRouter ,Routes , Route } from "react-router-dom"
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Routes >
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
