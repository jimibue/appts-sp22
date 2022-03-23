//1. import tools
import { useState, useEffect } from "react";
import axios from "axios";

// here is my hook function
// if you want to use this you need to give a valid url
const useAxiosOnMount = (url) => {
  //2. set up state tools
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. doing axios calling and updating state
  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    setError(null);
    try {
      let res = await axios.get(url);
      setResponse(res);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // use our hooks (in another component)
  // const {response, loading, error} = useAxiosOnMount('/api/things')
  return {response, loading, error}

};

export default useAxiosOnMount

// GENERIC LOAD DATA ON MOUNT INSTRUCTIONS
//load data on mount

//1. import tools
// import {useState, useEffect} from 'react'
// import axios from 'axios'

//2. set up state tools
//const [response, setResponse] = useState(null)
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)

// 3. doing axios calling and updating state
// useEffect(()=>{
//     getData()
// },[])

// const getResponse = async()=>{
//     setError(null)
//     try {
//         let res = await axios.get(urlHere)
//         setResponse(res)
//         setLoading(false)
//     } catch (error) {
//         setError(error)
//         setLoading(false)
//     }
// }


// use our hooks (in another component)
// const {response, loading, error} = useAxiosOnMount('/api/things')

//4. use our state to render what going on
// if(loading) return <p>loading</p>
// if(error) return <p>error</p>
// return (
//     <div>
//         <h1>Response</h1>
//         <p>{JSON.stringify(response)}</p>
//     </div>
// )
