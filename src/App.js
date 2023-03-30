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
      "My life experiences, attention to detail, friendly demeanor, and drive have all lead me to become a versatile and adaptive full-stack web developer. I approach building web applications with an enthusiastic energy - I am a big fan of having fun and a good laugh. However, I take a lot of pride in my work and my word. I've been coding for just over a year now and looking at my first projects to what I can make today gets me very excited for my own future. After dedicating myself in the legal, education and wine industries, I am ecstatic to become involved in software development!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
