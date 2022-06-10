function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <header className="header">
          <div className="info">
            <div className="info-wrap">
              <img src="img/user.png" alt="avatar" className="info-avatar" />
              <div className="info-list">
                <ul>
                  <li>John Smith</li>
                  <li>Portland, Oregon, USA</li>
                  <li>
                    <img src="img/flag.png" alt="flag" />
                    English
                  </li>
                </ul>
                <div className="skill-list">
                  <div className="skill">PHP</div>
                  <div className="skill">Ruby</div>
                  <div className="skill">JavaScript</div>
                  <div className="add-skill">
                    <img src="img/plus.svg" alt="plus" />
                  </div>
                </div>
              </div>
            </div>
            <div className="print">
              <img src="img/print.svg" alt="" />
              <span>Print this page</span>
            </div>
          </div>
        </header>
        <main className="main">
          <article className="main-top">
            <div className="left-wrapper">
              <div className="portfolio">
                <h2>Portfolio</h2>
                <ul>
                  <li>
                    <span>Bootstrap 4 Material Design (Sample Link)</span>
                  </li>
                  <li>
                    <span>Modern JavaScript stack</span>
                  </li>
                  <li>
                    <span>Datepicker for twitter bootstrap</span>
                  </li>
                  <li>
                    <span>Fast and reliable Bootstrap widgets in Angular</span>
                  </li>
                </ul>
              </div>
              <div className="experience">
                <h2>Experience</h2>
                <ul>
                  <li>
                    <span>PHP</span>
                    <span>6 years</span>
                  </li>
                  <li>
                    <span>Ruby</span>
                    <span>2 years</span>
                  </li>
                  <li>
                    <span>JavaScript</span>
                    <span>4,5 years</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-wrapper">
              <div className="code">
                <h2>Sample code</h2>
                <div>
                  <img src="img/code.png" alt="code" />
                </div>
              </div>
              <div className="more-info">
                <div>
                  <h2>Availability</h2>
                  <span>Full-time</span>
                </div>
                <div>
                  <h2>Preferred Environment</h2>
                  <span>GitHub, Mac OSX</span>
                </div>
              </div>
            </div>
          </article>
          <article className="main-bottom">
            <div className="quotes">
              <div className="quote">
                <h2>The Most Amaizing...</h2>
                <span>
                  <img src="img/commas.png" alt="commas" />
                  The only true wisdom is in knowing you know nothing...
                  <img src="img/commas.png" alt="commas" />
                </span>
              </div>
              <div className="quote">
                <h2>In clients I look for...</h2>
                <span>
                  <img src="img/commas.png" alt="commas" />
                  There is only one good, knowledge, and one evil, ignorance.
                  <img
                    src="img/commas.png"
                    alt="commas"
                    className="comma-bottom"
                  />
                </span>
              </div>
            </div>
            <div>
              <img src="img/map.png" alt="" />
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
