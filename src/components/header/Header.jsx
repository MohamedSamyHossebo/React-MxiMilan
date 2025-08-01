import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

export default function Header() {
  const reactDescriptions = ["Fundamentals", "Crucial", "Core"];
  const description = reactDescriptions[getRandomInt(2)];
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
