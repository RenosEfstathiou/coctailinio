import './dist/css/main.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
function App() {
  return (
    <div>
      <Navbar />
      <div className='px-3'>
        <Search />
      </div>
    </div>
  );
}

export default App;
