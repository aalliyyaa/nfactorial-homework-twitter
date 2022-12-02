import SideMenu from "./Components/SideMenu";
import Home from "./Components/Home";
import Search from "./Components/Home/Search";


function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>


    </div>
  );
}

export default App;
