const {connection}=require("../Config/database_config");
const sql_queries=require("../Contants/sql_qurey");
const createTableQueryUser=sql_queries.createTableQueryUser;
const addIndexToUser=sql_queries.addIndexToUser;
connection.query(createTableQueryUser, (err, results) => {
    if (err) {
        console.error('Error creating table:', err.message);
        return;
    }
    console.log('Table created successfully');
});
connection.query(addIndexToUser,(err,resule)=>{
    if(err){
        console.log("Error in creating index to user Table",err.message);
        return;
    }
    console.log("Index to user added successfully");
    connection.end();
})