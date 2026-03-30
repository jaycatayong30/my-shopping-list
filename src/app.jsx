import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import { ToggleApp } from "./components/ToggleTextApp";
import { FruitsSearch } from "./components/FruitSearchApp";
import { SuperheroForm } from "./components/SuperHeroAppForm";
import { CurrencyConverter } from "./components/CurrencyConverter";
import { Board } from "./components/TicTacToeGameApp";
import { Board } from "./components/TicTacToeGameApp";
import "./styles.css";

const Dashboard = () => (
  <div className="dashboard-wrapper">
    <h1>freeCodeCamp Exercises</h1>
    <div className="project-grid">
      <Link to="/shopping-list" className="project-card">
        <h2>Shopping List</h2>
        <p>React State & Hooks Practice</p>
      </Link>
      <div className="project-grid">
        <Link to="/toggle-app" className="project-card">
          <h2>Toggle Text App</h2>
          <p>Working with State and Responding to Events in React</p>
        </Link>
        <Link to="/fruits-search" className="project-card">
          <h2>Fruits Search</h2>
          <p>Understanding Effects and Referencing Values in React</p>
        </Link>
        <Link to="/superhero-form" className="project-card">
          <h2>Superhero Form</h2>
          <p>Working with Forms in React</p>
        </Link>
        <Link to="/currency-converter" className="project-card">
          <h2>Currency Converter</h2>
          <p>React Strategies and Debugging (Part 1)</p>
        </Link>
        <Link to="/tic-tac-toe" className="project-card">
          <h2>Tic Tac Toe</h2>
          <p>React Strategies and Debugging (Part 2)</p>
        </Link>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-layout">
        <header className="app-header"></header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/fruits-search" element={<FruitsSearch />} />
            <Route path="/toggle-app" element={<ToggleApp />} />
            <Route path="/superhero-form" element={<SuperheroForm />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
            <Route path="/tic-tac-toe" element={<Board />} />
          </Routes>
        </main>
        <footer className="app-footer"></footer>
      </div>
    </Router>
  );
}

export default App;
