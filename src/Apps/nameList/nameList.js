import React, { Component } from "react";

class NameListz extends Component{
    render() {
        const names = ["Miranda Keys", "Jon Doe", "Alex Mark", "Davon Martin", "Trisha Grasso", "Jane Silantro", "Jason Crafton", "Derik Delanee","Miranda Keys", "Jon Doe", "Alex Mark", "Davon Martin", "Trisha Grasso", "Jane Silantro", "Jason Crafton", "Derik Delanee", "Miranda Keys", "Jon Doe", "Alex Mark", "Davon Martin", "Trisha Grasso", "Jane Silantro", "Jason Crafton", "Derik Delanee", "Miranda Keys", "Jon Doe", "Alex Mark", "Davon Martin", "Trisha Grasso", "Jane Silantro", "Jason Crafton", "Derik Delanee"];
        const items = []
      
        for (const [index, value] of names.entries()) {
            items.push(<li key={index}><a>{value}</a></li>)
        }

        return (
            <div className="namelist flex center out-scale" id="myList">
            </div>
        );
    }
}
export default NameListz;