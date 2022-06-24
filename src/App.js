import './App.css';
import { Home } from './pages/home'
import { Login } from './pages/login'
import { GradesPage  } from './pages/seeGrades'
import { UploadPage  } from './pages/uploadGrades'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/grades" element={<GradesPage></GradesPage>}></Route>
          <Route path="/uploadGrades" element={<UploadPage></UploadPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
