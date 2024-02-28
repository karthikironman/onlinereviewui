import logo from './logo.svg';
import './App.css';
import LoginForm from './Component/Login';
import HomePage from './Component/HomePage';
import {Routes, Route} from 'react-router-dom';
import NotFound from './Component/notFound';

function App() {
  return (
    <div className="App">
   
<Routes>
<Route path='home' element= { < HomePage /> }></Route> 
<Route path='Login' element= { <LoginForm /> }></Route>
<Route path='*' element= { <NotFound/> }></Route>

</Routes>






    </div>
  );
}

export default App;
