const axios = require("axios")

const api = {
  getUserProfile: username => axios.get(`https://api.github.com/users/${username}`)
}

module.exports = api;