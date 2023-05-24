import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen(){

    console.log("Entered");

    const navigate = useNavigate();
    const mailer = ()=>{
        axios.get("http://localhost:8000/api/mail/read")
        .then((res)=>{
            if(res.data.status==200){
                console.log(res.data)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    setInterval(mailer,50000);

    // setInterval(mailer,6000);

    return (
        <h1>Your Gmail Automation has been started</h1>
    );
}

export default HomeScreen;