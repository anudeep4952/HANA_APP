
$.response.contentType = 'application/json';
$.response.headers.set("Access-Control-Allow-Origin", "*");
$.response.status = $.net.http.OK;

/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */
"use strict"; 

 //let s1 = $.request.body;
 /*let s1 = $.request.parameters.get('filedata');
 console.log(s1);*/


  //let conn = $.db.getConnection();
  let conn1 = $.hdb.getConnection();
  let pstmt1,pstmt;
  let rs;
  let query;

  let output= {results:[]};
 /*query1 = 'insert into \"SCPDB_2\".\"filestore1" values(?)';
          pstmt1= conn.prepareStatement(query1);
	      pstmt1.setString(1,s1);
         rs1 = pstmt1.executeUpdate();//executeUpdate() for edit delete or insert.
	      conn.commit();*/
    
        query = 'SELECT * FROM \"DEMO_1\".\"crud"';
         rs= conn1.executeQuery(query);
        
         console.log(rs);
	     for(let item of rs){
					
			    var record = {};
				record.prod_id = item.prod_id;
				record.product_name = item.product_name;
				record.item = item.item;
				record.supp_name = item.supp_name;
				output.results.push(record);
	   
	
	    }
let body = JSON.stringify(output);
$.response.setBody(body);





