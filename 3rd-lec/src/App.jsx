
import React,{useEffect,useState} from 'react';
//https://randomuser.me/api/
 function App() {
  const [data,setData]= useState();
  useEffect(()=>{

    const fetchData= async()=>{
        const res=await fetch('https://randomuser.me/api/');
         data=await res.json();
        console.log(data)
        setData(data)
        return data;

    }

    fetchData();
    console.log("heelo from useeffect");
    return console.log("from the returning statment")
  },[]);


  return (
  <React.Fragment>
  <h1>app</h1>
<h1>{data.info.seed}</h1>
  </React.Fragment>
  )
}

export default App
