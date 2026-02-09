import express from "express"
import { getAllUser,addUser } from "../controllers/userController.js"

const route= express.Router()

route.get("/all",getAllUser)
route.post('/register',addUser)

export default route