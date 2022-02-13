import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Model from "./pages/Model";
//components
import Header from "./components/Header";
//Styles
import "./App.scss";

function App() {
  const location = useLocation();

  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <>
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home imageDetails={imageDetails} />} />
          <Route
            path="/model/:id"
            element={<Model imageDetails={imageDetails} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
