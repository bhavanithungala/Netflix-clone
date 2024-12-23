import appStore from "./redux/appStore";
import Main from "./components/Main";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={appStore}>
      <Main />
    </Provider>
  );
};

export default App;
