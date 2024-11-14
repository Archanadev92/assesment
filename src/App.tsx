import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ApiDetails from "./components/ApiDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:providerName" element={<ApiDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
