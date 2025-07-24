import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data-with-examples.js";
import Header from "./components/header/header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
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
            <TabButton
              onSelect={() => handleSelect("components")}
              label="Components"
            >
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} label="Components">
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("props")}
              label="Components"
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("state")}
              label="Components"
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
