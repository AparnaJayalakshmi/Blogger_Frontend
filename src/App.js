import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Register from "./components/Register";
import Home from "./components/Home";
import SingleBlog from "./components/SingleBlog";

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
          <Route path='blog/:id' element={<SingleBlog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
