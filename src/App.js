import { Provider } from "react-redux";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import store from "./store";
import "./styles/App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Navbar />
        <Contacts />
      </div>
    </Provider>
  );
};

export default App;
