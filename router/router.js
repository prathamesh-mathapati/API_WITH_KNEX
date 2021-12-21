var express=require('express')
var aap=express()
const {InsertData,InsersAPIdata,UpdateId,DeleteID}=require('./../insertData/inserData')
const router=express.Router()

router.post('/',InsersAPIdata)
router.post('/Insert',InsertData)
router.put('/Update/:id',UpdateId)
router.post('/Delete',DeleteID)
router.get('/',(req,res)=>{
    res.send('sadfghj')
})

module.exports=router   