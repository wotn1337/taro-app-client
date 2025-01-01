import { Provider } from "react-redux";
import { ThemeProvider } from "./providers";
import { AppRouter } from "./routers";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
