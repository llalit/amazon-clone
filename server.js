const express = require('express');


const app = express()
const mysql = require('mysql');




const con = mysql.createConnection
(
	{
		host:'localhost',
		user:'root',
		password:'',
		database:'amazon'
	}
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const bodyParser = require('body-parser')
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
 
app.get('/',function(req,res){
	res.send('Welcome to Api 1');
})


app.post('/login', function(req,res){

    let username=req.body.email;
    let password= req.body.password;
    console.log(username, password);
    let sql = `select * from users where email='${username}' and password = '${password}'`;
    con.query(sql, (err, result)=>{
        if (err) throw err;
        if(result){
            let dummy = result.map((key)=>{
                return{key:key.id, name:key.name, email:key.email, password:key.password, PhoneNo:key.PhoneNo}
            })

            res.send(dummy);
        }
    })
})


app.listen(4200, ()=>{
    console.log('connected on port 4200');
})