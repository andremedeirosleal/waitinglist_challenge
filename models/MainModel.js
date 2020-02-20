const mysql         = require('mysql')
const config        = require('../mysql/config')
var pool            = mysql.createPool({
    host            : config.host,
    user            : config.user,
    password        : config.password,
    database        : config.database,
    connectionLimit : 100
})


module.exports = {
    
    //Rota de login
    async root(req, res, next){        
        //conexao com banco mysql
        pool.getConnection(function(err,connection){
            if (err) {
                res.status(500).send({ status: 'Internal Server Error', error: 'Database connection fail' })
                return
            }  
                        
            var sql = 'SELECT * FROM tbl_patients limit 1 ' 
            // SELECT getDistance(lat1,lng1,$lat2,$lng2) as distance FROM your_table.           
            connection.query(sql,function(err,rows){
                if(!err) {                                       
                    if (rows.length >0){
                        res.status(200).send({ status: 'OK' })
                    }else {
                        res.status(401).send({ status: 'Unauthorized', error: 'Authentication fail' })
                    }
                }else{                    
                    res.status(500).send({ status: 'Internal Server Error', error:'Invalid query' })
                    return           
                }
            })
        })         
    }, 
}