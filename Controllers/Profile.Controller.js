const User = require('../Models/User.model')
const createError = require('http-errors')

module.exports = {

  getProfile: async (req,res,next)=>{
    try {
      const userId = req?.payload?.aud

      const user = await User.findById(userId)

      const body = {
        name: user?.name,
        email:user?.email
      }
      
      res.json({body})
    } catch (error) {
      next(error)
    }
  }

}