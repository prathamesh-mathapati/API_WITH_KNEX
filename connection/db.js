require('dotenv').config()
const knex=require('knex')({
    client:'mysql',
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
})


knex.schema.createTable('API',(table)=>{
    table.string('id'),
    table.string('coures_name'),
    table.string('type'),
    table.string('logo'),
    table.string('short_description')
}).then(()=>{
    console.log('table create');
}).catch((err)=>{
    console.log('your table is allredy create');
})



module.exports=knex