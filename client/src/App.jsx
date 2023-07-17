import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/landing';
import Home from './views/Home/home';
import Detail from './views/Detail/detail';
import Form from './views/Form/form';
import About from './views/About/About';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/activity' element={<Form />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>

  )
}

export default App;
