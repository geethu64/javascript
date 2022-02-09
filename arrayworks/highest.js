var expenses=[10000,25000,20000,35000,45000]
var lowst_exp=expenses[0]
for(let amount of expenses){
    if(amount<lowst_exp){
        lowst_exp=amount
    }
}
console.log(lowst_exp);