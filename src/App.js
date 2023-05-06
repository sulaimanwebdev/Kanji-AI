
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import KeyTakeAways from "./pages/KeyTakeAways";
import VideoGallery from "./pages/VideoGallery";
import CustomerViewpoint from "./pages/CustomerViewpoint";
import Reports from "./pages/Reports";

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<Login/>} />
         <Route path="/dashboard/key-takeaways" element={<KeyTakeAways/>} />
         <Route path="/dashboard/video-gallery" element={<VideoGallery/>} />
         <Route path="/dashboard/customer-viewpoint" element={<CustomerViewpoint/>} />
         <Route path="/reports" element={<Reports/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;