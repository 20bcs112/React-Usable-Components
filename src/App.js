import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../src/home/Home.js'
import Careers from './Careers.js';
import './App.css';
import SDE from './roles/SDE.js';
import Manager from './roles/Manager.js';
import Services from './Services.js';
import Agriloan from './services/Agriloan.js';
import Team from './Team.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/careers-developer" element={<SDE/>}/>
          <Route path="/careers-manager" element={<Manager/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/agriculture-loan" element={<Agriloan/>}/>
          <Route path="/team" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
