import './App.css';
import NavBar from './Navbar';
import Footer from './Footer';
import MovieList from "./MovieList";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <NavBar/>
          <MovieList/>
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
 
  );
}

export default App;
