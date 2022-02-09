var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
        acno: 1002, ac_type: "current", balance: 8000, transactions: [
          { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
          { to: 1001, amount: 5000, note: "geto", method: "neft" },
          { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
    
        ]
      },
      {
        acno: 1003, ac_type: "current", balance: 16000, transactions: [
          { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
          { to: 1002, amount: 500, note: "geto", method: "neft" },
          { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
    
        ]
      },
    
    ]
    // q1:number of transactions regarding with ac/no 1001
    var acno_data=accounts.find(data=>data.acno==1001).transactions.length
    // console.log(acno_data);


// q2: deatails of account  number 1002
var acno_details=accounts.find(data=>data.acno==1002)
//console.log(acno_details);


// q3 :transactions above 500 of all users
// accounts.map(data=>data.transactions).flat().filter(trans=>trans.amount>500).forEach(t=>console.log(t))

// q4: count of transactions group by method


// q5:no of transactions whose ac_type = savings
var saving=accounts.filter(data=>data.ac_type=="savings").map(tran=>tran.transactions).flat().length
//  console.log(saving);


// q6: highest balance
var highest_balance=accounts.reduce((tran1,tran2)=>tran1.balance>tran2.balance?tran1.balance:tran2.balance)
//  console.log(highest_balance);


// q7:sort accounts based on balance order by desc 
var srt=accounts.sort((act1,act2)=>act2.balance-act1.balance)
// console.log(srt);


// q8:details of savings type account
var saving=accounts.filter(data=>data.ac_type=="savings")
//  console.log(saving);


// q9 debit transactions of 1002
var debit_details=accounts.find(tran=>tran.acno==1002).transactions
// console.log(debit_details);

//q10 credit transactions of 1002 
// var debit_tran=accounts.filter(tran=>tran.acno!=1002).map(data=>data.transactions).flat().filter(t=>to==1002)
// console.log(debit_tran);

// q11 print debit transactions of 1002 amount > 500
var debit_details=accounts.filter(tran=>tran.acno==1002).map(data=>data.transactions).flat().filter(ac=>ac.amount>500)
//  console.log(debit_details);


// q12 total sum of debit transction of 1002 
var debit_sum=accounts.filter(tran=>tran.acno==1002).map(data=>data.transactions).flat().map(tran=>tran.amount).reduce((s1,s2)=>s1>s2?s1:s2)
// console.log(debit_sum);

// q13 highest amount transaction
var highest_amount=accounts.map(tran=>tran.transactions).flat().map(am=>am.amount).reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest_amount);
