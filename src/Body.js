import React, { useState } from 'react'
import "./Body.css" 

const Body =  ({Candidate1,Candidate2 ,votecandidate , account}) => {

    const [Candidate,setCandidate]= useState("");

    const onChange=(e) =>{
        setCandidate(e.target.value)
    }

    const onClick=(e)=>{
        e.preventDefault()
        if(Candidate !==0) {votecandidate(Number(Candidate));}
        else{window.alert("there is error in submission")}

    }
   
    return (

            
        
        <div className="container1" >
            <h1 className="title"> Election Results</h1>
          <div className="container">
            <div className="container21">
                <h2 className="id">#</h2>
                <h2 className="name">Name</h2>
                <h2 className="Votecount">Votes</h2>
                <h3></h3>
            </div>
            <div className="container21">
                <h2 className="id">1</h2>
                <h2 className="name">{Candidate1.name}</h2>
                <h2 className="Votecount">{Candidate1.voteCount}</h2>
            </div>
            <div className="container21">
                <h2 className="id">2</h2>
                <h2 className="name">{Candidate2.name}</h2>
                <h2 className="Votecount">{Candidate2.voteCount}</h2>
            </div>
            </div>
               <h2>Select :</h2>
            <select id="select" onChange={onChange}> 
                <option value="1">{Candidate1.name}</option>
                <option value="2">{Candidate2.name} </option>
            </select>
            <button className="button" onClick={onClick} >Vote to : {Candidate}</button>

            <h3> voter id :{account}</h3>
        </div>
    )

  
}

export default Body
