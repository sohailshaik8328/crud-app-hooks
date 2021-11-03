import { useState } from 'react';
import '../stylesheets/App.css';
import User from './User';
import UserForm from './UserForm';


function App() {
  let [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])

  let addUser = (name, username) => {
    let obj = {name, username};
    setData(data.concat(obj));
    localStorage.setItem('data', JSON.stringify(data.concat(obj)))

  }

  const removeUser = (id) => {
 let newData = [...data];
 newData.splice(id, 1)
 localStorage.setItem('data', JSON.stringify(newData));
 setData(newData)
  }
  
 return (
   <>
   <div className='container'>
    <UserForm addUser={addUser} />
      <ul>
        {
          // console.log(data)
          data.map((user, index) => (
            <User user={user} index={index} removeUser={removeUser} key={index} />
          ))
        }
      </ul>
   </div>
   </>
 )
}


export default App;
