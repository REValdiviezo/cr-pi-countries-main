import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing/landing';
import Home from './views/Home/home';
import Detail from './views/Detail/detail';
import Form from './views/Form/Form';
import Nav from './components/Nav/Nav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountries, getActivities, onSearch } from './redux/action';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getCountries()); // Cuando el componente home se monta trae todas las card
    dispatch(getActivities()); // trae todas las actividades que necesita el filtro Actividades en el Home
  }, []);

  return (
    <div>
      <div>
        {
        location.pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/activity' element={<Form />} />;
      </Routes>
    </div>
  );
};

export default App;
