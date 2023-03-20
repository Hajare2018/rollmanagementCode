



// connction.query(sql,(err,result)=>
//     if(err){
//         res.send(err.sqlMessage)
//     }
//     else{
//         // res.send(result[0].name)
//         if(result[0]){
//             let uid = result[0].id
//             if(result[0].role===admin){
//                 let sqlQuerry = 'SELECT * FROM user';
//                 connction.query(sqlQuerry,(err,output)=>{
//                    res.send(output)
//                 })
//             }
//         // else{
//             else if(result[0].role === 'superadmin'){
//                 let sqlQuery = `SELECT * FROM tbl_user WHERE id='${uid}'`;
//                 connection.query(sqlQuery, (err,output)=>{
//                    res.send(output)
//             })

//             // else{
//             //     res.send("Incorrect Userid and password!!!")
//             // }
//             // let sqlQuery = `SELECT * FROM tbl_user WHERE id='${uid}'`;
//             //   connection.query(sqlQuery, (err,output)=>{
//             //      res.send(output)
//             // })
//         }
//     }
//     // }
// }
// })

