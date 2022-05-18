import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Basic from "./components/Basic";
import Business from "./components/Business";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero h1Text="Try Pulse free for 30 days." pText="See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days."/>
      <div className="options--container">
        <Basic/>
        <Business/>
        <Features/>
      </div>
    </div>
  );
}

export default App;
