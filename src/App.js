import './App.css';
import { CreateNewRoutes } from './CreateRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowData } from './ShowData';
import { ProtectedRoutes } from './ProtectedRoutes';
import { NotFound } from './NotFound';

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
