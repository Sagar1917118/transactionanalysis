const {connection}=require("../Config/database_config");
const sql_queries=require("../Contants/sql_qurey");
const createTableQueryTransaction=sql_queries.createTableQuery;
const addIndexToTransaction=sql_queries.addIndexToTransaction
connection.query(createTableQueryTransaction, (err, results) => {
    if (err) {
        console.error('Error creating table:', err.message);
        return;
    }
    console.log('Table created successfully');
});
connection.query(addIndexToTransaction,(err,result)=>{
    if(err){
        console.log("Error in creating index to user Table",err.message);
        return;
    }
    console.log("Index to user added successfully");
    connection.end();
})