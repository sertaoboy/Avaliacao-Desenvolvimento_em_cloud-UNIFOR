const express = require("express");
const exp = express();
const calculadora = ("./calculadora");
const app = ("./app");


exp.get("/",function(req,res){
    res.send("<h1><strong>AV II - Desenvolvimento de Software em Nuvem</strong></h1>");
});


exp.get("/produtos",function(req,res){
    res.send("<h1><strong>Exemplo do professor:</strong> Lista de produtos -</h1>");
});

exp.get("/consulta/:parametro",function(req,res){
    res.send("retorno da consulta:"+ req.params.parametro);
});



exp.listen(4000,function(erro){
    if(erro){
        console.log("ERRO!")
    }else{
        console.log("Servidor iniciado na porta:4000")
    }
});
