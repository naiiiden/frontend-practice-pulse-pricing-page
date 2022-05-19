import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Basic from "./components/Basic";
import Business from "./components/Business";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Subvert from "./images/subvert-avatar.png";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Hero h1Text="Try Pulse free for 30 days." pText="See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days."/>
      <section className="options--container">
        <Basic/>
        <Business/>
        <Features/>
      </section>
      <Testimonial src={Subvert} quote='“Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”' author="SUBVERT MARKETING, INC."/>
    </div>
  );
}

export default App;
