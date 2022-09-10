import { useEffect, useState } from 'react';
import './App.css';
import {db} from "./firebase-config"
import {collection, 
        getDocs, 
        addDoc, 
        updateDoc, 
        doc, 
        deleteDoc} from "firebase/firestore"
       

function App() {
  const [users, setUsers] = useState([])
  const dbCollectionRef = collection(db, "users")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  useEffect(()=>{

    const getUsers = async () =>{
      const data = await getDocs(dbCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }

    getUsers();

  })

  const updateUser = async (id, age) =>{
    const userDoc = doc(db, "users", id)
    const newField = {age: Number(age)+1};
    await updateDoc(userDoc, newField)

  }

  const addUser = async (e) =>{
    e.preventDefault();
    await addDoc(dbCollectionRef, {name, age:Number(age)});
    
    setName("");
    setAge("")
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  return (
    <div className="App">

      <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
      <input type="number" value={age} onChange={e=> setAge(e.target.value)}/>
      <button onClick={addUser}>Add User</button>


      {users.map((user)=>
      (
      <div key={user.id}><h1>Name: {user.name}</h1>
       <h1>Age: {user.age}</h1>
       <button onClick={()=>updateUser(user.id, user.age)}>Increment Age</button>
       <button onClick={()=>deleteUser(user.id)}>Delete User</button>
      </div>))}
    </div>
  );
}

export default App;
