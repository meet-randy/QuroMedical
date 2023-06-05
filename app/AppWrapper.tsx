import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Loader from "./components/AppLoader/Loader";

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
