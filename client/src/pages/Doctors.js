import { useState, useEffect } from "react";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import List from "../components/List";

const Doctors = () => {
  const { response, loading, error } = useAxiosOnMount("/api/doctors");

  // HOOK UP 'CRUDABLE' doctors state in combo with
  // our useAxiosOnMount
  const [doctors, setDoctors] = useState([]);

  // I need to wait for that axios call and set the response
  // and once that is then i can set my doctor state
  useEffect(() => {
    if (response) {
      setDoctors(response.data);
    }
  }, [response]);

  const addDoctor = () => {
    setDoctors([...doctors, { id: 3, name: "DR asdashjk" }]);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <h1>Response</h1>
      <p>{JSON.stringify(response)}</p>
      <h1>Doctors from Response</h1>
      <p>{JSON.stringify(response.data)}</p>
      <h1>Doctors from doctors state (No renderData)</h1>
      <List data={doctors} />
      <h1>Doctors from doctors state (renderData</h1>
      <List
      header={'HEader YOYO'}
        data={doctors}
        renderItem={(d) => {
          return (
            <div key={d.id}>
              <p>{d.name}</p>
            </div>
          );
        }}
      />
      <p onClick={addDoctor}>add</p>
    </div>
  );
};

export default Doctors;

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

//4. use our state to render what going on
// if(loading) return <p>loading</p>
// if(error) return <p>error</p>
// return (
//     <div>
//         <h1>Response</h1>
//         <p>{JSON.stringify(response)}</p>
//     </div>
// )
