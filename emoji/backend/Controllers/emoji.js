const emojiModel = require("../Models/emoji")

async function saveText(req,res,next){
    try{
            let text = req.body;
            let response = emojiModel.insertMany(text)
            res.json(response)
    }
    catch(error){
        console.log(error)
    }
}   

module.exports ={
    saveText
}