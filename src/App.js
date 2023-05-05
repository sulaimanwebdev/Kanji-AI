
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import KeyTakeAways from "./pages/KeyTakeAways";
import VideoGallery from "./pages/VideoGallery";
import CustomerViewpoint from "./pages/CustomerViewpoint";

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route exact path="/dashboard/key-takeaways" element={<KeyTakeAways/>} />
         <Route exact path="/dashboard/video-gallery" element={<VideoGallery/>} />
         <Route exact path="/dashboard/customer-viewpoint" element={<CustomerViewpoint/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;