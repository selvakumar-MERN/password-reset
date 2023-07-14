import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import Updatepassword from './Components/Updatepassword/Updatepassword';
import Register from './Components/Register/Register';
import Invalid from './Components/Invalid';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact
          path='/'
          element={<Forgotpassword />} >
        </Route>
        <Route exact
          path='/updatepassword/:token'
          element={<Updatepassword />} >
        </Route>
        <Route exact
          path='/register'
          element={<Register/>} >
        </Route>
        <Route exact
          path='/invalid'
          element={<Invalid/>} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
