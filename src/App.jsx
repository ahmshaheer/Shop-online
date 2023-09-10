import {
  BrowserRouter,
  // Link,
  Route,
  Routes,
} from "react-router-dom";

import Navigation from "./components/Navigation/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        {/* <Route path="/blog/*" element={<BlogApp />} /> */}
        {/* <Route path="/users/*" element={<UserApp />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
