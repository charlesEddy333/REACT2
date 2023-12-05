import React from "react";
import dateFormatter from "./dateFormater"
import FormattedMoney from "./formattedmoney";



class ExpenseEntryItem extends React.component{
    constructor(props){
        super(props);
    }
        render(){
        return(
            <div>
                <div><b>Item:</b><em>Mango juice</em></div>
                <div><b>Amount:</b> <em>30.5</em></div>
                <div><b>Spend:</b><em>2022-10-10</em></div>
                <div><b>Category:</b><em>Food</em></div>
            </div>
        );
        }
    
}

export default ExpenseEntryItem; 