import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css"
import Footer from "./Public/Footer";
import Header from "./Public/Header";
import HomePage from "./Public/HomePage";
import Login from "./Public/Login";
import StaffLogin from "./components/StaffLogin";
import Registration from "./Public/Registration";
import ShowsMain from "./Public/Shows/ShowsMain";
import ShowInfo from "./Public/Shows/ShowInfo";
import Profile from "./Public/Profile";
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.user);
  const { show } = useSelector(state => state.shows.show);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage key={user} />
          </Route>
          <Route path="/login">
            <Login key={user} />
          </Route>
          <Route path="/staffLogin">
            <StaffLogin key={user} />
          </Route>
          <Route path="/Dashboard">
            <Profile key={user} />
            {/* {
              user && user.role ? <Profile dataLogin={setLogin} key={user.id} userData={user} /> : <Login />
            } */}
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/shows">
            <ShowsMain />
          </Route>
          <Route path="/aboutShow/:id">
            {/* hey */}
            <ShowInfo data={show} />
          </Route>
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
