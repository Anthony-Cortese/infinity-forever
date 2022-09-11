import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/Navbar";
import Copyright from "./pages/Copyright";
import Hollywood from "./pages/hollywood/Hollywood";
import Screwjack from "./pages/screwjack/Screwjack";
import Bottom from "./pages/underneath/Bottom";
import Wolf from "./pages/wolf/Wolf";
import "./App.css";
import Untitled from "./pages/untitled/Untitled";
import Horror from "./pages/untitled/Horror";
import Oscars from "./pages/oscars/Oscars";
import TV from "./pages/untitled/TV";
import Menu from "./components/Menu";
import Uncut from "./pages/untitled/Uncut";
import Sidebar from "./components/Sidebar";
import External from "./assets/External";
import Instagram from "./assets/Instagram";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/Menu" element={<Menu />}></Route>
        <Route path="/About" exact element={<About />}></Route>

        <Route path="/Screwjack" exact element={<Screwjack />}></Route>
        <Route path="/UnderneathTheBottom" exact element={<Bottom />}></Route>
        <Route path="/Venice" exact element={<Wolf />}></Route>
        <Route
          path="/OnceUponATimeInProvo"
          exact
          element={<Hollywood />}
        ></Route>
        <Route path="/Horror" exact element={<Horror />}></Route>
        <Route path="/New" exact element={<Uncut />}></Route>
        <Route path="/Untitled" exact element={<Untitled />}></Route>
        <Route path="/TV" exact element={<TV />}></Route>
        <Route path="/SLCOscars" exact element={<Oscars />}></Route>
        <Route path="/Youtube" element={<External />} />
        <Route path="/Instagram" element={<Instagram />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
