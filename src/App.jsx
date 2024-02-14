import './App.scss';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='App__body'>
        <Sidebar />
      </div >
    </div>
  );
}

export default App;
