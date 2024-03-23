import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title=" The Job Board" />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
