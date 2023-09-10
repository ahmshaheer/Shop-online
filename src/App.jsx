import {
  BrowserRouter,
  // Link,
  Route,
  Routes,
} from "react-router-dom";

import Navigation from "./components/Navigation/navbar";
import PopUpMain from "./components/PopUp-Main/popUp-Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* For showing Pop up menu */}
          <Route path="/" element={<PopUpMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
