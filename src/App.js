import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Search} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
