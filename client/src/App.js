import logo from './logo.svg';
import './App.css';
import Login from './Components/Login-SignUp/Login';
import SignupPage from './Components/Login-SignUp/SignUp';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
