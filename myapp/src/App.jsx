import logo from './logo.svg';
import './App.css';

import Card from './components/Cards/card';
import Navbar from './components/navbar/navbar';


function App() {
  // console.log("data-----",productData);
  // apis have 4 methods 
  // 1:get method(to read)
  // 2:post(create)
  // 3: put (update)
  // 4: delete(delete data)
  // i.e CRUD
   
  


  
  return (<div>
    <Navbar />
    <Card />
  
  </div>
  
  )

}

export default App;
