import { useEffect } from "react";
import Header from "../views/Header";
import Quiz from "../views/Quiz";
import { animateClasses } from "../helpers";

const Home = () => {
  animateClasses();
  useEffect(() => animateClasses());
  return (
    <main>
      <Header />
      <Quiz />
    </main>
  );
}

export default Home;
