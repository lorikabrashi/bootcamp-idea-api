const userService = require('../services/service.users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = {
  login: async (values) => {
    const { email, password } = values

    if (!email) {
      throw Error('Email is required')
    }
    if (!password) {
      throw Error('Password is required')
    }

    const user = await userService.getUserByEmail(email)
    const compared = await bcrypt.compare(password, user.password)
    if(!compared){
      throw Error('Password is incorrect')
    }    

    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  
   const data = {
    _id: user._id,
    email: user.email,
    token
   } 

    return data;
  },
}
