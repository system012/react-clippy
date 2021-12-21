import './App.css';
import { CreateNewRoutes } from './CreateRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowData } from './ShowData';
import { ProtectedRoutes } from './ProtectedRoutes';

function App() {
  return (
    <main className="App">
      <header><h1>Welcome to Clippy!</h1></header>
        <Router>
          <Routes>
            <Route path="/" element={<CreateNewRoutes />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/clipped/:data" element={<ShowData />} />
            </Route>

          </Routes>
        </Router>
      </main>
  );
}

export default App;
