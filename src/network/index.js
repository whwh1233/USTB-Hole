const http = require('http')
const nUrl = require('url')
const mysql = require('mysql')


const connection = mysql.createConnection({
  host:'bj-cdb-5zoxxozq.sql.tencentcdb.com',
  user:'root',
  password:'whwh1233',
  port:"61303",
  database:'hole'
})
connection.connect()


const hostname = '0.0.0.0'
const port = 3000
const server = http.createServer((req,res) => {
  let method = req.method
  let url = nUrl.parse(req.url)

  if (method === 'GET' && url.pathname === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World')
    return
  }

  if (method === 'GET' && url.pathname === '/apii/user'){
    const sql = 'SELECT * FROM user';	// sql命令
    connection.query(sql, (err, results) => {	// results 为查询的结果 fields 为返回的信息
	    if (err) {
		    console.log('[SELECT ERROR] -', err.message);
		    return;
	    };
	    console.log('-----访问user----');	
      this.message = results
    });
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({
      code:0,
      user:this.message,
      result:{
        username:'flz0000   study  please  '
      }
    }))
    return
  }
  if (method === 'GET' && url.pathname === '/apii/content'){
    const sql = 'SELECT * FROM content';	// sql命令
    connection.query(sql, (err, results) => {	// results 为查询的结果 fields 为返回的信息
	    if (err) {
		    console.log('[SELECT ERROR] -', err.message);
		    return;
	    };
      console.log('---访问content----');	
      this.message = results
    });
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({
      code:0,
      content:this.message,
      result:{
        username:'flz   study1111  please  '
      }
    }))
    return
  }
  res.statusCode = 404
  res.setHeader('Content-Type','text/plain')
  res.end('NOT FOUND')
})


server.listen(port,hostname,() => {
  console.log('Server running at http://')
})