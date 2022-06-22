import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import {store} from './redux'
import { GamePage } from "./pages/game-page/GamePage";
import { OrderPage } from "./pages/order-page";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
