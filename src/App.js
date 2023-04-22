import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box mt={"65px"}>
        <HomePage />
      </Box>
    </div>
  );
}

export default App;
