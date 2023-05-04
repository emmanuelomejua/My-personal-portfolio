import { useContext } from 'react';
import Intro from './comps/intro/Intro';
import About from './comps/about/About';
import ProductList from './comps/productList/ProductList';
import Contact from './comps/contact/Contact';
import Toggle from './comps/toggle/Toggle';
import { ThemeContext } from './context/context';




const App = () => {
  const {darkMode} = useContext(ThemeContext); 


  return (
    <main style={{backgroundColor: darkMode ? '#222' : 'white', color: darkMode? 'white': '#222' }}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact darkMode={darkMode}/>
    </main>
  );
}

export default App;
