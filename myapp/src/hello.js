import React from "react";
import './index.css';

let date = new Date().toTimeString();


class Helloworld extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    Welcome to react <br /><span className="red">{date}</span>
                </h1>
            </div>
        )
    }
}

export default Helloworld;