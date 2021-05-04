import { useEffect, useState } from 'react';
import './App.css';
import Loading from "./Loading";
import Tour from './Tour';
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error){
      setLoading(false);
      console.log(error);
    // }   
  }useEffect(() => {
    fetchTours();
  },[])
  if(loading){
    return(
      <main><Loading /></main>
    )
  }
  return <main>
    <Tours />
  </main>
  return <h2>tours project setup</h2>
}

export default App;
