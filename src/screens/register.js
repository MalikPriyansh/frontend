import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){

    const navigate = useNavigate();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const onchangeHAndler = (e)=>{
        if(e.target.id=='1') setUsername(e.target.value);
        else setPassword(e.target.value);
    }

    const submitHandler = ()=>{
        axios.post("http://localhost:8000/api/register",{
          username : username,
          password : password
        })
        .then((res)=>{
          if(res.status===200){
             navigate("/");
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    return (
        <div class="container mt-5">
            <h1>Register</h1>

            <div class="row">
              <div class="col-sm-8">
                <div class="card">
                  <div class="card-body">

                    {/* <!-- Makes POST request to /register route --> */}
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input id="1" type="email" class="form-control" name="username" onChange={onchangeHAndler}/>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input id="2" type="password" class="form-control" name="password" onChange={onchangeHAndler}/>
                    </div>
                    <button type="submit" class="btn btn-dark" onClick={submitHandler}>Register</button>

                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="card social-block">
                  <div class="card-body">
                    <a class="btn btn-block" href="/auth/google" role="button">
                      <i class="fab fa-google"></i>
                      Sign Up with Google
                    </a>
                  </div>
                </div>
              </div>

            </div>
        </div>
    );
}

export default Register;