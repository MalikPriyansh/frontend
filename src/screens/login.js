import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();
  
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
  
    const onchangeHAndler = (e)=>{
        if(e.target.id=='1') setEmail(e.target.value);
        else setPassword(e.target.value);
    }
  
    const submitHandler = ()=>{
        axios.post("http://localhost:8000/api/login",{
          username : email,
          password : password
        })
        .then((res)=>{
          console.log(res.data);
          if(res.data.status==200){
             navigate("/home");
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    const redirectToGoogle = ()=>{
      window.open(
        `http://localhost:8000/auth/google`,
        "_self"
      );
    }

    return (
        <div class="container mt-5">
            <h1>Login</h1>
            <div class="row">
              <div class="col-sm-8">
                <div class="card">
                  <div class="card-body">

                    {/* <!-- Makes POST request to /login route --> */}
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input id="1" type="email" class="form-control" name="username" onChange={onchangeHAndler}/>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input id="2" type="password" class="form-control" name="password" onChange={onchangeHAndler}/>
                    </div>
                    <button type="submit" class="btn btn-dark" onClick={submitHandler}>Login</button>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <a class="btn btn-block" role="button" onClick={redirectToGoogle}>
                      <i className="fab fa-google"></i>
                      Sign In with Google
                    </a>
                  </div>
                </div>
              </div>

            </div>
        </div>
    )
}

export default Login;