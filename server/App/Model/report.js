const {connection}=require("../Config/database_config");
const sql_queries=require("../Contants/sql_qurey");
const createTableQueryReport=sql_queries.createTableQueryReport;
const addIndexToReport=sql_queries.addIndexToReport;
connection.query(createTableQueryReport, (err, results) => {
    if (err) {
        console.error('Error creating table:', err.message);
        return;
    }
    console.log('Table created successfully');
});
connection.query(addIndexToReport,(err,result)=>{
    if(err){
        console.log("Error in creating index to user Table",err.message);
        return;
    }
    console.log("Index to user added successfully");
    connection.end();
})