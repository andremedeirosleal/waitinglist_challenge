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
    async root(req, res, next){                
        pool.getConnection(function(err,connection){
            if (err) {
                res.status(500).send({ status: 'Internal Server Error', error: 'Database connection fail' })
                return
            }  
            //parameters from request
            let {lat, lon} = req.body   

            //random chance for low score patients
            let val = Math.floor(Math.random() * 100);
            let str_where = ''
            if (val > 69)  str_where = 'where  getDistance(latitude,longitude,' + lat +','+ lon +') < 5'   //30% chance for less then 5 score patients
             
            //sql query         
            var sql = 'SELECT name, age, getDistance(latitude,longitude,' + lat +','+ lon +') distance, '                        //default fields
            sql += '(score + if(getDistance(latitude,longitude,' + lat +','+ lon +') <10000,1,0))score '                         //add distance score
            sql += 'FROM tbl_patients '
            sql += str_where                                                                                                    //chance for low score patients (see randam code right above)
            sql += 'order by (score + if(getDistance(latitude,longitude,' + lat +','+ lon +') <10000,10,0)) desc, name asc '     //order by score, name
            sql += 'limit 10'                                                                                                   //results limit        
            
            connection.query(sql,function(err,rows){
                if(!err) {                                       
                    if (rows.length >0){
                        //object assembly with database results
                        let dados = []
                        for (x=0; x<10; x++){
                            let {name, age, score} = rows[x]                            
                            dados.push({name,age,score})
                        }                        
                        
                        res.status(200).send(dados)
                    }else {
                        res.status(200).send({ status: 'OK', error: 'No patients found' })
                    }
                }else{                    
                    res.status(500).send({ status: 'Internal Server Error', error:'Invalid query' })
                    return           
                }
            })
        })         
    }, 
}