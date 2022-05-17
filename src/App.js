import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero h1Text="Try Pulse free for 30 days." pText="See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days."/>
    </div>
  );
}

export default App;
