import Home from "./pages/Home";
import Canvas from "./canvas/index";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        {/* <h1 className="head-text">Hello There</h1> */}
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </>
  );
}

export default App;
