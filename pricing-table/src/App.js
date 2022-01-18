import "./App.css";
import Free from "./Free.js";
import Plus from "./Plus.js";
import Pro from "./Pro.js";

function App() {
  const styles = {
    display: "flex",
    gap:"3rem",
    flexWrap: "wrap",
    backgroundColor: "#007bff",
   
  };
  return (
    <div style={styles}>
      <Free />
      <Plus />
      <Pro />
      
     
    </div>
  );
}

export default App;
