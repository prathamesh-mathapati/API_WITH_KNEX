const axios=require('axios')
const fs =require('fs')
axios.get('http://saral.navgurukul.org/api/courses').then((res)=>{
    fs.writeFileSync('data.json',JSON.stringify(res.data,null,4))
})
console.log('s');