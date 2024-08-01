function TransactionRow({idx,transaction_id,amount,currency,transaction_status,transaction_time,
    initiating_bank,receiving_bank,class_name}){
    return(
        <div className="transaction_row">
            <div className={`${class_name} 
            ${((class_name)==="grid_item_2") && (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{transaction_id}</div>
            <div className={`${class_name} ${(class_name)==="grid_item_2"?"font_bold":""}
             ${((class_name)==="grid_item_2") && (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{amount}</div>
            <div className={`${class_name}
             ${((class_name)==="grid_item_2") && (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{currency}</div>
            <div className={`${class_name} transaction_${transaction_status}
             ${((class_name)==="grid_item_2")&& (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{transaction_status}</div>
            <div className={`${class_name}
             ${((class_name)==="grid_item_2") && (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{transaction_time}</div>
            <div className={`${class_name}
             ${((class_name)==="grid_item_2")&& (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{initiating_bank}</div>
            <div className={`${class_name}
             ${((class_name)==="grid_item_2")&& (idx%2==0?"transaction_row_even":"transaction_row_odd")}`}>{receiving_bank}</div>

        </div>
    )
}
export default TransactionRow;