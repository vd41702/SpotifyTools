import { BrowserRouter, Routes, Route } from "react-router-dom";
/* pages */
import Home from "./pages/Home"
import About from "./pages/About"
import Splitter from "./pages/Splitter"


/* Components */
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="splitter" element={<Splitter/>} />
          <Route path="sign-in" element={<SignInPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
