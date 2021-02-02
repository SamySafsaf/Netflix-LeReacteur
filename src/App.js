import "./App.scss";
import Header from "./Header";
import logo from "./img/logo-netflix.png";
import Section from "./Section";
function App() {
  return (
    <div className="App">
      <Header logoN={logo} />
      <Section />
    </div>
  );
}

export default App;
