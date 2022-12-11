import './App.css';
import Nav from "./component/navbar/nav"
import Home from "../src/component/home/home"
import Feature from './component/feature/feature';
import Article from './component/articles/article';
import Contact from './component/contact/contact';

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Feature />
      <Article />
      <Contact />
    </div>
  );
}

export default App;
