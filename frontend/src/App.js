import './App.css';
import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Demo01 from './pages/test/demo/demo01'
import Theme from './pages/test/mall/theme'
import { Shelves } from './pages/test/mall/shelves'
import Login from './pages/public/login/login'
import MainBoard from './pages/test/crm/mainboard'
import MainBoard2, { PieChart, Home, ChartLine} from './pages/public/cms-gs/mainboard2'
import Category from './pages/public/cms-gs/components/categories/Categories';
import Product from './pages/public/cms-gs/components/products/Products';
import Report from './pages/public/cms-gs/components/reports/Report';

class App extends React.Component {

  render() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/demo01' element={<Demo01 />}/>
        <Route path='/mall' element={<Theme />}/>
        <Route path='/shelves' element={<Shelves />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/crm' element={<MainBoard />}/>
        <Route path='/cms' element={<MainBoard2 />}>
          <Route path='home' element={Home()}></Route>
          <Route path='category' element={<Category />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='pie' element={<PieChart />}></Route>
          <Route path='report' element={<Report />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );}
}

export default App;
