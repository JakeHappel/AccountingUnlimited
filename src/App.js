import Home from './components/Home';
import Header from './components/Header';
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
    </div>
  );
};

export default App;