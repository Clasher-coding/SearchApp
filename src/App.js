import './App.css';
import ImageSearchApp from './ImageSearchApp';
import Navigation5 from './Navbar';
import Footer7 from '../src/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Navigation5/>
      <ImageSearchApp/>
      <hr style={{fontWeight:"bolder"}} />
      <Footer7/>
    </div>
  );
}

export default App;
