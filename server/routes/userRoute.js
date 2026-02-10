import express from "express"
import { getAllUser,addUser, login } from "../controllers/userController.js"

const route= express.Router()

route.get("/all",getAllUser)
route.post('/register',addUser)
route.post('/login', login)

export default route