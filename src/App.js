import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
import Freelance from './components/Freelance';
import Client from './components/Client';
import TalentManager from './components/TalentManager';
import Operation from './components/Operations-page/Operation';
import PostJobOpening from './components/Operations-page/PostJobOpening';
import ClientWithCompany from './components/ClientWithCompany';
// import Home from './components/Home';
// import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
{/* <Home/> */}

<BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index element={<Home />} />
      <Route path="freelance" element={<Freelance/>} />
      <Route path="client_with_individual" element={<Client/>} />
      <Route path="client_with_company" element={<ClientWithCompany/>} />
      <Route path="talentmanager" element={<TalentManager/>} />
      {/* <Route index element={<Operation />} /> */}
      <Route path="operations" element={<Operation/>} />
      <Route path="operations/post-job-opening" element={<PostJobOpening/>} />
      
        
      </Route>
    </Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
