import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





export const Login = () => {
  
 // let navigate = useNavigate()

  // Attention ici mise en place de valeur par défaut pour travailler.
  // NE JAMAIS FAIRE CELA
  const [credentials, setCredentials] = useState({
      email: 'eya.othmani99@gmail.com',
      password: 'eya123'
  })

  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(credentials)
    axios.post('http://localhost:8080/api/auth/' , credentials)
    .then(res  =>console.log(res) )
    .catch(error =>console.log(error))

  }

  const onChange=(e)=>   {
setCredentials({
...credentials ,[e.target.name]:e.target.value
}) 
 }
  
 
    return (
      <form onSubmit={onSubmit}>
        <div id="login" className="text-center">
          <div className="group">
              <label htmlFor="email">Login</label>
              <input type="text" name="email"  value={credentials.email} onChange={onChange}/>
          </div>
          <div className="group">
              <label htmlFor="password">Mot de passe</label>
              <input type="text" name="password" value={credentials.password} onChange={onChange}/>
          </div>
          <div className="group">
              <button>login</button>
          </div>
          </div>
      </form>
  );
};

export default Login;