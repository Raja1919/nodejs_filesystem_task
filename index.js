const express=require("express")
const app=express()
const fs=require("fs")
const path=require("path")
const dir_path=path.join(__dirname,"timestamp")

app.get("/",(req,res)=>{
    let data=new Date()
    let time_stamp=`Last updated:${data.toUTCString().slice(0,-3)}`
    fs.writeFileSync(`${dir_path}/current_date_time.txt`,time_stamp,(err)=>{
        if(err){
            res.send({message:"error"})
        }
    })
    
    res.status(200).sendFile(path.join(dir_path,"/current_date_time.txt"))

})

app.listen(9000,()=>console.log("server started in localhost:9000"))