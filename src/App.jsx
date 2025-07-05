import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Home /> */}
      <Contact />
    </div>
  );
}

export default App;
