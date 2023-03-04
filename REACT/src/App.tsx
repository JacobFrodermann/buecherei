import './style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Category from  './Category'

function App(props) {
return <div className="App">
      <header className="App-header">
        <section>
          <h1>Bücherei</h1>
          <h2>Regale:</h2>
        </section>
        <ul>
          <li>
            <section>
              <p>
                <h2>Suche<input id="search" placeholder="|"/><FontAwesomeIcon icon={faMagnifyingGlass}/></h2>
              </p>
            </section>
          </li>
          <li>
            <Category Name="Krimi" />
          </li>
          <li>
            <Category Name="Sachbuecher"/>
          </li>
          <li>
            <Category Name="Romane"/>
          </li>
          <li>
            <Category Name="Fantasy"/>
          </li>
          <li>
            <Category Name="fuer Kinder"/>
          </li>
        </ul>
      </header>
    </div>
 }

 export default App;