import About from "./components/about/About";
import Infinity from "./components/Infinity";
import Navbar from "./components/Navbar";
import Copyright from "./pages/Copyright";
import Hollywood from "./pages/hollywood/Hollywood";
import Screwjack from "./pages/screwjack/Screwjack";
import Bottom from "./pages/underneath/Bottom";
import Wolf from "./pages/wolf/Wolf";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Screwjack />
      {/* <Bottom />
      <Wolf />
      <Hollywood /> */}
      {/* <Infinity /> */}
      <Copyright />
    </div>
  );
}

export default App;
