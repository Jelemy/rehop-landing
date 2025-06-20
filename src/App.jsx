import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EFEFEF]">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/rehop-landing" element={<Landing />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;