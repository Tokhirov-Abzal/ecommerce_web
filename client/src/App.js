import AppRouter from "./components/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  );
}

export default App;
