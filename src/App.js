import './App.css';
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/HeroSection";
// import MainSection from "./components/secondSection/MainSection";

function App() {
  return (
    <div className={"App"}>
        <Header />
        <HeroSection />
        {/*<MainSection/>*/}
    </div>
  );
}

export default App;
