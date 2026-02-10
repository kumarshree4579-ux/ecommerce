import jwt from 'jsonwebtoken'

const generatetoken=(userId)=>{
    console.log(process.env.JWT_SECRET)
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"1d"})
}

export default generatetoken