import React, { useState } from 'react';
const ToDo=()=>{
    const [curr,setCurr]=useState(0);
    const incNum=()=>{
        setCurr(curr+1);
    }
    const decNum=()=>{
        if(curr>0){
        setCurr(curr-1);
    }else{
    alert("Cannot exceed 0")
    setCurr(0);};
};
    

    return(
        <>
            <div className="main-div">
                <div className="centre-div">
                    <h1>{curr}</h1>
                    <div className="btn-div">
                        <button onClick={incNum}>Inc</button>
                        <button onClick={decNum}>Dec</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default ToDo;