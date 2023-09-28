
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
import KeyTakeAways from "./pages/KeyTakeAways";
import VideoGallery from "./pages/VideoGallery";
import CustomerViewpoint from "./pages/CustomerViewpoint";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<Navigate to="/dashboard/key-takeaways" />}  />
         <Route path="/dashboard/key-takeaways" element={<KeyTakeAways/>} />
         <Route path="/dashboard/video-gallery" element={<VideoGallery/>} />
         <Route path="/dashboard/customer-viewpoint" element={<CustomerViewpoint/>} />
         <Route path="/reports" element={<Reports/>} />
         <Route path="/settings" element={<Settings/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;