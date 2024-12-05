import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 변경
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <ThemeToggle />
          <Routes> {/* Switch를 Routes로 변경 */}
            <Route path="/" element={<MainPage />} /> {/* component를 element로 변경 */}
            <Route path="/cart" element={<CartPage />} /> {/* component를 element로 변경 */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;