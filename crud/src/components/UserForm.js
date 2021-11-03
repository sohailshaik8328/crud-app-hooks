import React, {useState} from 'react'

function UserForm(props) {
    let {addUser} = props;
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
  
    function handleSubmit (event) {
      event.preventDefault();
      addUser(name, username);
      setName("");
      setUsername("")
    }
  

  
    return (
      <section className="container">
          <div className="flex center align_center">
              <form action="" onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} type="text" value={name} name="name" placeholder="Enter your name" />
                <input onChange={(e) => setUsername(e.target.value)} type="text" value={username} name="username" placeholder="Enter your username" />
                <button className="btn">Add user</button>
              </form>
          </div>
      </section>
    );
}

export default UserForm;
