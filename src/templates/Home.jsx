import { useEffect } from "react";
import Header from "../views/Header";
import Quiz from "../views/Quiz";
import { animateClasses } from "../helpers";

const Home = () => {
  animateClasses();
  useEffect(() => animateClasses());
  return (
    <div className="App">
      <Header />
      <Quiz />
    </div>
  );
}

export default Home;
