 const express=require("express")
const {sendMessage} = require("../controllers/messageControllers")
const { protect } = require("../middleware/authMiddleware")

 const router=express()

 router.route("/").post(protect, sendMessage)
//  router.route("/:chatId").post(protect, allMessages )

 module.exports=router