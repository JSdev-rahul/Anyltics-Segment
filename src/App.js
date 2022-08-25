import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aboute from "./component/Aboute";
import Profile from "./component/profile";
import Dashbord from "./component/Dashbord";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboute" element={<Aboute />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashbord" element={<Dashbord />} />
          </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
