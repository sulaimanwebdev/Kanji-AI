
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import KeyTakeAways from "./pages/KeyTakeAways";

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route exact path="/dashboard/key-takeaways" element={<KeyTakeAways/>} />
        
         </Routes>
       </Router>
    </div>
  );
}

export default App;