const express = require("express")
const router = express.Router();
const {isAuth} =require("../Middleware/auth_middleware");
const {getTransactionReportDaily,getTransactionReportMonthly,getTransactionReportWeekly}=require("../Controllers/transaction_report");
router.post("/get-transaction-daily",isAuth,getTransactionReportDaily);
router.post("/get-transaction-weekly",isAuth,getTransactionReportWeekly);
router.post("/get-transaction-monthly",isAuth,getTransactionReportMonthly);
module.exports = router;