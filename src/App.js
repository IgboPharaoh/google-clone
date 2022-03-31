import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search-page/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
