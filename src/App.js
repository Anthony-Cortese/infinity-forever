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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      {/* <About /> */}
      <Screwjack />
      <Bottom />
      <Wolf />
      <Hollywood />
      {/* <Infinity /> */}
      <Copyright />
    </div>
  );
}

export default App;
