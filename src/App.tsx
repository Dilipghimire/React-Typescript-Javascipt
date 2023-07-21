import Todo from "./Pages/TodoApp/Todo";
import DashBoard from "./Pages/DashBoard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import { ModalProvider } from "./components/Context/ModalContext";
import AmazonPages from "./Pages/AmazonClone/AmazonPages";
import "@stripe/stripe-js";
import WeatherApp from "./Pages/WeatherApp";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Routes>
          <Route path="/home" element={<DashBoard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<DashBoard />} />
          <Route path="/portfolio/*" element={<Portfolio />} />
          <Route path="/amazon/*" element={<AmazonPages />} />
          <Route path="/weather" element={<WeatherApp />} />
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;
