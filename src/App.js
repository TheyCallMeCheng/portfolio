import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="Projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
