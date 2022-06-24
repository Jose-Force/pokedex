import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes> 
          <Route path='/' element = {<Home />} />
          <Route path='/:id' element={<Detail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;