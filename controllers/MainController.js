const MainModel = require( '../models/MainModel')

module.exports = {
    async root(req, res, next){         
        await MainModel.root(req, res, next)                 
    },

}