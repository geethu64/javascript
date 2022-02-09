var pro=new Promise((res,rej)=>{
    let ticket_won=true;
    if(ticket_won){
        res("success")
    }
})
pro.then(msg=>console.log("lets buy a new house")).catch(error=>console.log("keep on trying"))