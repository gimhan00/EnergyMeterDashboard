import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Overview from "./Dashboard/Overview/Overview";
import Dashboard from "./Dashboard/Dashboard";
// import Dashboard from "./Dashboard/Dashboard.jsx";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        {/* <Route path="/sellers" element={<Sellers />} /> */}
        {/* <Route path="/customers" element={<Customers />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  ) 
  
}

export default App;
