import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Lexi Scott",
    location: "Paso Robles, CA",
    tagline: "Web Developer",
    email: "lexiscott0101@gmail.com",
    availability: "Open for work",
    brand:
      "My life experiences, attention to detail, friendly demonear and drive have lead me to become a versatile and adaptive full-stack web developer with an enthusiastic energy while bringing projects to life.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
