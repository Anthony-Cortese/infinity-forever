import { Route, Switch, Link, Routes } from "react-router-dom";
import About from "./components/about/About";
import Dashboard from "./components/dashboard/Dashboard";
import Infinity from "./components/Infinity";
import Navbar from "./components/Navbar";
import Copyright from "./pages/Copyright";
import Hollywood from "./pages/hollywood/Hollywood";
import Screwjack from "./pages/screwjack/Screwjack";
import Bottom from "./pages/underneath/Bottom";
import Wolf from "./pages/wolf/Wolf";
import "./App.css";
import Untitled from "./pages/untitled/Untitled";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />}></Route>

        <Route path="/Productions" exact element={<Dashboard />}></Route>

        <Route path="/Screwjack" exact element={<Screwjack />}></Route>
        <Route path="/UnderneathTheBottom" exact element={<Bottom />}></Route>
        <Route path="/Venice" exact element={<Wolf />}></Route>
        <Route
          path="/OnceUponATimeInProvo"
          exact
          element={<Hollywood />}
        ></Route>
        <Route path="/Untitled" exact element={<Untitled />}></Route>
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
