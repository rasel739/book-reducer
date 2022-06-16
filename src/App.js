import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider, PrivateRoute } from "./lib/auth";
import Discover from "./pages/Discover";
import FinishedBooks from "./pages/FinishedBooks";
import ReadingList from "./pages/ReadingList";
import UserList from "./pages/UserList";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Discover} />
          <PrivateRoute path="/reading" component={ReadingList} />
          <PrivateRoute path="/finish" component={FinishedBooks} />
          <Route path="/user" component={UserList} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
