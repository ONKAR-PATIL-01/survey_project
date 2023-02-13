import {Home} from './Component/Home';
import {Login} from './Component/Login';
import {Navbar} from './Component/Navbar'
import { Routes,Route } from "react-router-dom";
import { Dashboard } from './Component/Dashboard';

import { DragAndDrop } from './Component/DragAndDrop';
import { DynamicFom } from './Component/DynamicFom';

function App() {
  return (
    <>
    <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='Dashboard' element={<Dashboard/>}></Route>
      <Route path='dnd' element={<DragAndDrop/>}></Route>
      <Route path='dynamicform/:id' element={<DynamicFom/>}></Route>
   </Routes>
   </>
  );
}

export default App;
