import './App.css';
import MainScroll  from './components/MainScroll';
import SideBar from './components/SideBar';
import './css/SideBar.css';
import './css/MainScroll.css';
function App() {
  return (
    <div className="App">
          <SideBar ></SideBar>
          <MainScroll ></MainScroll>
    </div>
  );
}

export default App;
