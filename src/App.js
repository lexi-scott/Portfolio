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
      "My life experiences, attention to detail, friendly demonear and drive have lead me to become a versatile and adaptive full-stack web developer with an enthusiastic energy while bringing projects to life. I enjoy the creativity of imagining a web application, then tapping into my design skills when developing the frontend. After, I apply my analytical side when conceptualizing data collection, server routes and debugging. After dedicating myself in the legal, education and wine industries, I am ecstatic to become involved in software development!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
