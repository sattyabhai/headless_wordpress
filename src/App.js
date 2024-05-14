import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
function App() {
  return (
      <Router>
          <div className='container-fluid'>
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home/>}></Route>

            </Routes>
        </div>

    </Router>
  );
}

export default App;
