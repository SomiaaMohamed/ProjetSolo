var express = require('express');
var Mot = require("../model/Mot");
const random = require('random');

exports.getMot = async function(req,res) {
    await Mot.find(function(err,mot){
        if(err){
            console.log(err)
        }
        else{
            res.json(mot)
        }
    })
}

exports.addMot = async function(req,res) {
    const motData ={
        name : req.body.name,
        definition : req.body.definition
    }
    await Mot.create(motData)
    .then(mot =>{
        res.json({success : true})
    })
    .catch(err =>{
        res.send('error : '+ err)
    })
}

exports.getMotRandom = async function(req,res){
    await Mot.find(function(err,mot){
        if(err){
            console.log(err)
        }
        else{
            let result= []
            let numberTab=[]
            for (var i = 0; i < 10; i++) {
                let number = random.int(min=0,max=mot.length-1)
                numberTab.push(number)
                result.push(mot[number])
            }
            res.json(result)
        }
    })
    // let number= random.int(min=1,max=5);
    // res.json(number)
    //rest
}

exports.deletMot = async function(req,res){
    Mot.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}