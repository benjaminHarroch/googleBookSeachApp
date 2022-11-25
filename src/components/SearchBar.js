
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Result } from './Result';

export const SearchBar = () => {

    const [data,setData]=useState([]);
    const [searchBar,setSearchBar]=useState('');
    const [error,setError]=useState('');


    async function getDataFromAPI (){

        setData([]);
        setError("");

        if(searchBar.length<3){
        
            console.log("not enough")
            setError((prev)=>prev + "please enter mor thene 3 characters")
            return;
        }

         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchBar}`)
         .then((res)=>setData(res.data.items))
         .catch((e)=>setError("error with the api"));

         

    }
 
    useEffect(()=>{

       // getDataFromAPI()

    },[])

    useEffect(()=>{

        console.log(data);
        
    },[data])


  return (

    <div className='ContainerSearchBar'>
 
         <label>seacrh a book : </label>
         <input placeholder='search a book' onChange={(e)=>setSearchBar(e.target.value)} value={searchBar}></input>
         <button onClick={()=>getDataFromAPI()}>  search</button>
         <div>{error}</div>
         <Result  data={data} />
    </div>

  )
}
