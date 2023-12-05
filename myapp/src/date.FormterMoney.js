import React from "react";

class dateFormatter extends React.Component{
    constructor(props){
        super(props);
    }


    format(val){
        const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP,","OCT","NOV","DEC"];
        let parsed_DatA =new Date(Date.parse(val));
        let formatted_data = parsed.Date.getData() + "_" + months[parsed_Date.getMonth()]+"_" + parsed_data.getFullyear()
        return formatted_data;  
    }

    render(){
        return(
            <span>{this.format(this.props.value)}</span>
        )
    }

  
}
export default dateformatter;