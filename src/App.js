import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <div className="App">
    <Header />
    <div className='background'>
    <main>
    <Home />
    </main>
    </div>
    <Footer />
    </div>
  );
};

export default App;