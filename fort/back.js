const { response } = require("express");
var express=require("express");
var apiserver=express(); 
var jquerry=require("jquery");
var sf=require("fs");
const { ServerResponse, request } = require("http");
console.log("funziona");

function login(){
    const xhttp = new XMLHttpRequest();
     xhttp.onload=function(){
         document.getElementById("user").innerHTML=this.responseText;
         document.getElementById("password").innerHTML=this.responseText;
     } 
     xhttp.open("POST","foryback.html");
     xhttp.send();
}

