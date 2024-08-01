const sql_queires={
    createTableQueryTransaction:`
CREATE TABLE Transaction ( 
transaction_id INT AUTO_INCREMENT PRIMARY KEY, 
transaction_id_bank VARCHAR(255) UNIQUE NOT NULL,
report_id INT,
amount DECIMAL(10, 2) NOT NULL, 
currency VARCHAR(10) NOT NULL, 
payment_mode VARCHAR(50) NOT NULL, 
transaction_status VARCHAR(50) NOT NULL, 
transaction_date DATE NOT NULL,
transaction_time TIMESTAMP NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
initiating_bank JSON NOT NULL, 
receiving_bank JSON NOT NULL,
FOREIGN KEY (report_id) REFERENCES Report(report_id)
);
`,
addIndexToTransaction:`
CREATE INDEX idx_transaction_date ON Transaction(report_idt);
`,
createTableQueryReport:`
CREATE TABLE Report ( 
report_id INT AUTO_INCREMENT PRIMARY KEY, 
user_id INT,
report_from DATE NOT NULL,
report_to DATE NOT NULL, 
report_type ENUM('daily', 'weekly', 'monthly') NOT NULL, 
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
FOREIGN KEY (user_id) REFERENCES User(user_id)
);
`,
addIndexToReport:`
CREATE INDEX idx_reporttype_report_from_report_to ON Report(report_type,report_from,report_to);
`,
createTableQueryUser:`
CREATE TABLE User ( 
user_id INT AUTO_INCREMENT PRIMARY KEY, 
userName  VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
hashed_password VARCHAR(255) NOT NULL, 
account_id VARCHAR(255), 
last_login TIMESTAMP,
is_active BOOLEAN
);
`,
addIndexToUser:`
CREATE INDEX idx_user_email_account_id ON User(email,account_id);

`,
get_report_id_query:`
SELECT report_id from REPORT WHERE user_id = ? AND report_type = ? AND report_from = ?;`,
report_data_query:`
SELECT * from Transaction WHERE report_id = ?;`,
selectAllFromUser:`SELECT * FROM User WHERE user_id = ?;`
}
module.exports=sql_queires;