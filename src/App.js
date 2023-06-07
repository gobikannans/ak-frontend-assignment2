import './App.css';
import Sidebar from './components/SideBar';
import Main from "./components/Main";

function App() {
  return (
    <div className='bg-[#F5F5F5] flex'>
     <Sidebar/>
     <Main/>
    </div>
  );
}

export default App;
