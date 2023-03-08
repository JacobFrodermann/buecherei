import './style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faAdd, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Category from  './Category'
import { useEffect, useState } from "react";
import Create from './Create';

interface category {
  name : string;
  id : string;
}

async function fetchCategories() {
  let res = await fetch("http://localhost:3001/catgeories")
  let response = await res.json();

  console.log(response)

  return response as Array<category>;
}

function renderCategories(categories : Array<category>) {
  return categories.map(category => <li>
      <Category name= {category.name} id={category.id.slice(6)}/>
    </li>
  )
}

function App() {
   const [categories, initCategories] = useState([])
  
   useEffect(() => {
       fetchCategories().then((data => {initCategories(data)}))
   },[])

   const [adding, setAdding] = useState(false)

  return <div className="App">
      <header className="App-header">
        <section>
          <h1>Bücherei</h1>
          <h2>Regale: <section id="add" onClick={() => {setAdding(true)}}><FontAwesomeIcon icon={faAdd} /></section></h2>
          <Create />
        </section>
        <ul>
          { renderCategories(categories) }
        </ul>
      </header>
    </div>
 }

 export default App;
