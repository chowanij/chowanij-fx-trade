import React from 'react';
import { Route, Link } from 'react-router-dom';
import TraderPage from './pages/TraderPage/TraderPage';
import AboutPage from './pages/AboutPage/AboutPage';

const App = () => (
  <div>
    <header>
      <Link to="/">Home - Trader Panel</Link>
      <span>{`/`}</span>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={TraderPage} />
      <Route exact path="/about-us" component={AboutPage} />
    </main>
  </div>
)

export default App;