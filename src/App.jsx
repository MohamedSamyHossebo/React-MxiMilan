import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/header/header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label="Components">Components</TabButton>
            <TabButton label="Components">JSX</TabButton>
            <TabButton label="Components">Props</TabButton>
            <TabButton label="Components">State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
