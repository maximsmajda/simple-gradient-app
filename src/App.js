import ColorPicker from "./components/ColorPicker";
import Preview from "./components/Preview";
import Settings from "./components/Settings";

import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="shape"></div>
      </div>
      <header>
        <h1>simple gradient generator</h1>
      </header>
      <main>
        <div className="color-pickers">
          <ColorPicker id={0} />
          <ColorPicker id={1} />
        </div>
        <Preview />
        <Settings />
      </main>
      <footer>
        <p>
          made by <a href="https://github.com/maximsmajda">Maxim Smajda</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
