import React, { Component } from "react";
//import NameListz from '../nameList/nameList'
import SearchIcon from '@material-ui/icons/Search';
import KeyImage from '../../images/Q-Background.svg'; 
import SVG from 'react-inlinesvg';

class FrontPlate extends Component{

    openNames() {
        let list = document.getElementById("RetailerLicenseNumberList");

        var number = document.getElementById("RetailerLicenseNumber").value;
        var formData = new FormData();
        //var xml = new XMLHttpRequest();
        //var xmlURL = "RetrieveRetailerLicenseNumber.php";

        var obj = [{"Miranda Keys": "Miranda Keys"}, {"John Doe": "Jon Doe"}, {"Trisha Grasso": "Trisha Grasso"}];
        //var obj = JSON.parse('{"name":"Miranda Keys"}', '{"name":"John Doe"}', '{name":"Alexis Mark"}', '{name":"Trisha Grasso"}', '{"name":"Jane Silantro"}');
        var option = document.createElement("option")

        if(list.classList.contains("out-scale")){
            list.classList.remove("out-scale");
            list.classList.add("in-scale");
            //list.innerHTML = obj.name;
            formData.append("RetailerLicenseNumber",number)

            var item = obj.find((item) => item[number])

            if(item){
                list.innerHTML = item[number];
            }
            /*
            for (var Count = 0; Count < obj.length; Count++) {
                list.appendChild(option)
                option.value = obj[Count]
            }*/

        }else{
            list.classList.add("out-scale");
            list.classList.remove("in-scale");
        }
 
        //xml.open("post", xmlURL, true)
        //xml.send(RetrieveRetailerLicenseNumberForm)
        //xml.onreadystatechange = function() {
            //if (xml.readyState == 4 && xml.status == 200) {

    }
        //}
    //}
    


    render() {
        const mylist = new FrontPlate();
        return (
            <div className="flex center grid10">
                <SVG className="abs" src={KeyImage} />     
                <div className="holder flex column">
                    <h1>Name Search</h1>
                    <form name="ViewRetailerInformationForm" method="post" action="ViewRetailerInformation.php">
                    <input type="text" name="RetailerLicenseNumber" id="RetailerLicenseNumber" placeholder="Search..." list="RetailerLicenseNumberList"></input>
                    <button className="abs" type="button" onClick= {mylist.openNames}><SearchIcon></SearchIcon></button>
                    <datalist className="namelist flex center out-scale" id="RetailerLicenseNumberList"></datalist>
                    </form>
                </div>
            </div>
        );
    }
}
export default FrontPlate;



/*
function RetrieveRetailerLicenseNumber() {
    if (document.getElementById("RetailerLicenseNumber").value == "") {
        document.getElementById("RetailerLicenseNumberList").innerHTML = ""
    }
    if (document.getElementById("RetailerLicenseNumber").value.length >= 3) {
        var RetailerLicenseNumber = document.getElementById("RetailerLicenseNumber").value
        var RetrieveRetailerLicenseNumberForm = new FormData()
        RetrieveRetailerLicenseNumberForm.append("RetailerLicenseNumber", RetailerLicenseNumber)
        var RetrieveRetailerLicenseNumberRequest = new XMLHttpRequest()
        var RetrieveRetailerLicenseNumberRequestURL = "RetrieveRetailerLicenseNumber.php"
        RetrieveRetailerLicenseNumberRequest.open("post", RetrieveRetailerLicenseNumberRequestURL, true)
        RetrieveRetailerLicenseNumberRequest.send(RetrieveRetailerLicenseNumberForm)
        RetrieveRetailerLicenseNumberRequest.onreadystatechange = function() {
            if (RetrieveRetailerLicenseNumberRequest.readyState == 4 && RetrieveRetailerLicenseNumberRequest.status == 200) {
                var RetrieveRetailerLicenseNumberReturnData = JSON.parse(RetrieveRetailerLicenseNumberRequest.responseText)
                document.getElementById("RetailerLicenseNumberList").innerHTML = ""
                for (var Count = 0; Count < RetrieveRetailerLicenseNumberReturnData.length; Count++) {
                    var RetailerLicenseNumberOptionsElement = document.createElement("option")
                    document.getElementById("RetailerLicenseNumberList").appendChild(RetailerLicenseNumberOptionsElement)
                    RetailerLicenseNumberOptionsElement.value = RetrieveRetailerLicenseNumberReturnData[Count]
                }
            }
        }
    }
}
*/



