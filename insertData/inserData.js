const fs=require('fs')
const { type } = require('os')
const knex=require('./../connection/db')
var read=fs.readFileSync('axios/data.json','utf-8')
var objectRead=JSON.parse(read)['availableCourses']

exports.InsersAPIdata=((req,res)=>{
    for(i of objectRead){
        knex('API').insert({id:i.id,coures_name:i.name,type:i.type,short_description:i.short_description,logo:i.logo }).then((Data)=>{
                res.send({message:'data indsert in database'})
                console.log('data insert in database');
            }).catch((err)=>{
                res.send({message:'data not insert in database'})
                console.log('data is not in sert in database');
            })
        
        }
}) 

exports.InsertData=(req,res)=>{
    console.log(req.body);
    knex('API')
    .insert({id:req.body.id,
    type:req.body.type,
    coures_name:req.body.coures_name,
    short_description:req.body.short_description
    }).then(()=>{
        res.send({message:'data indsert in database'})
        console.log('Data in insert');
    }).catch((err)=>{
        res.send({message:'data not indsert in database'})
        console.log('data in no insert');
    })
}

exports.UpdateId=(req,res)=>{
    knex.select('*').from('API').update({
        id:req.body.id,
        coures_name:req.body.coures_name,
        type:req.body.type
    }).then((data)=>{
        res.send({message:'Data in update'})
    }).catch((err)=>{
        res.send({message:'Data is not update'})
    })
}

exports.DeleteID=(req,res)=>{
    knex.select('*').from('API').where({id:req.body.id}).del().then((data)=>{
        res.send({message:'Data is delete'})
    }).catch((err)=>{
        res.send({message:'Data is not delete'})
    })
}