
import './App.css';
import { SearchBar } from './components/SearchBar';
import { WatchList } from './components/WatchList'
import WatchListContext from './context/watchlistcontext';
import { useState } from 'react';
//AIzaSyArfPl7N_iUm0C9dbxHIzd8HB5YUxvt8vI

//console.log(WatchListContext)
function App() {

  const [watchList,setWatchList]=useState([]);

  return (

    <WatchListContext.Provider value={{watchList,setWatchList}} >

        <div className="App">
      
        <SearchBar />
        <WatchList watchList={watchList}/>
      
        </div>

    </WatchListContext.Provider>
  );
}

export default App;
