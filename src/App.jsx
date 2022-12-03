import { useState } from 'react';
import data from './data.js'
import './App.css';
import Menu from './Component/Menu/Menu';
import Nav from './Component/Nav/Nav';
const category=['all' ,...new Set(data.map((cat)=>cat.category))] 
function App() {
  const [categories, setcategories] = useState(category)
  const [menu, setmenu] = useState(data);
  function difargument(difcat){
    if(difcat==='all'){
      setmenu(data);
      return ;
    }
    const newitem=data.filter((item)=>item.category===difcat);
    setmenu(newitem);

  }
  return (
   <>
  <div className="container">
    <h1 className='text-center fw-bold m-5'> Our Menu</h1>
    <Nav categories={categories}  difargument= {difargument} />
    <div className="row">
    <Menu menu={menu} />
    </div>
  </div>
   </>
  );
}

export default App;
