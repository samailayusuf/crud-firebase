import { useEffect, useState } from 'react';
import './App.css';
import {db} from "./firebase-config"
import {collection, getDocs} from "firebase/firestore"

function App() {
  const [users, setUsers] = useState([])
  const dbCollectionRef = collection(db, "users")

  useEffect(()=>{

    const getUsers = async () =>{
      const data = await getDocs(dbCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
      // console.log(users)
    }

    getUsers();

  }, [])

  return (
    <div className="App">
      {users.map((user)=>
      (
      <div><h1>Name: {user.name}</h1>
       <h1>Age: {user.age}</h1>
      </div>))}
    </div>
  );
}

export default App;
