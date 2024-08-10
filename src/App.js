import { Outlet } from 'react-router-dom';
import './App.css';
// import Home from './Pages/Home';
import Link from './component/Link';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Outlet/>
      <Link />
    </div>
  );
}

export default App;
