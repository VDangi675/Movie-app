import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Headers from './component/Headers/Headers';
import Home from './component/Page/Home';
//import Headers from './component/Headers/Headers';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
   
     <Route path='/' element={<Home/>}/>
      <Route path='movie/:id' element={<h1>movie details app</h1>}/>
       <Route path='movies/:type' element={<h1>movie list  page</h1>}/>
        <Route path='headers' element={<Headers/>}/>
        
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
