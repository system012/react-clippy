import './App.css';
import { CreateNewRoutes } from './pages/CreateRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowData } from './pages/ShowData';
import { ProtectedRoutes } from './middelware/ProtectedRoutes';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <main className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<CreateNewRoutes />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/clipped/:data" element={<ShowData />} />
            </Route>

          <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
      </main>
  );
}

export default App;
