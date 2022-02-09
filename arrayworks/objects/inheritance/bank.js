class Bank{
    createAccount(acno,name,phone,balance){
        this.acno=acno;
        this.name=name;
        this.phone=phone;
        this.balance=balance
    }
    deposit(amount){
        this.balance+=amount
        console.log(`your account ${this.acno} has been credited with amount ${amount} your aval balance ${this.balance}`);
    }
    withdrwal(amount){
        if(amount>this.balance){
            console.log("insufficient balance transaction cancelled");
        }
        else{
            this.balance-=amount;
            console.log(`your account ${this.acno} has been debited with amount ${amount} your aval balance ${this.balance}`);

        }

    }
    balanceEnquiry(){
        console.log("your aval balance",this.balance);
    }
}
var obj=new Bank();
obj.createAccount(100,"ram",1233,2000)
obj.withdrwal(5000)