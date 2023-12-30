import { createRoot } from "react-dom";

const App = () => {
    return (
      <div>
        <h1>Hello React</h1>
        {Math.random() > 0.5 && <h2> Hello JSX </h2>}
      </div>
    );
  };
  
  const container = document.getElementById("app");
  const root = createRoot(container);
  
  root.render(<App />);