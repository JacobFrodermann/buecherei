import './style/App.css';

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
                <h2>Suche<input id="search" placeholder="|"/></h2>
              </p>
            </section>
          </li>
          <li>
          <section>
            <h3>Krimi</h3>
          </section>
          </li>
          <li>
          <section>
            <h3>Sachbuecher</h3>
          </section>
          </li>
          <li>
          <section>
            <h3>Romane</h3>
          </section>
          </li>
          <li>
          <section>
            <h3>Fantasy</h3>
          </section>
          </li>
          <li>
          <section>
            <h3>fuer Kinder</h3>
          </section>
          </li>
        </ul>
      </header>
    </div>
 }

 export default App;