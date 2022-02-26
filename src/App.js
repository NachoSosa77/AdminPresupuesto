import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NaviBar from "./components/Navibar";
import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";
import TransferPage from "./pages/TransferPage";
//import Tabs from "./components/Tabs";

function App() {
  return (
    <Router>
      <div>
        <NaviBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/income" element={<IncomePage/>}/>
        <Route path="/expense" element={<ExpensePage/>}/>
        <Route path="/transfer" element={<TransferPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
