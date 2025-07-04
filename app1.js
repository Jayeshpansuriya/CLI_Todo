import readline from 'readline';

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

})

const todos=[];

const showMenu=()=>{
    console.log("\n1.add a task");
    console.log("2.view a task");
    console.log("3.Exit");
    rl.question("Choos a option:", handleinput);

}

const handleinput=(option)=>{

    if(option === "1"){
       
        rl.question("add your task",(task)=>{
            todos.push(task);
            console.log('task added : '+ task)
            showMenu();
        })

    }else if(option === "2"){
        console.log("Yours task are:");
        todos.forEach((value,index)=>{
            console.log(`${index}. ${value}`);
        })
        showMenu();
    }else if(option === "3"){
        console.log("good byeeeeeeeeeeeeeeee......☺");
        rl.close()
    }else {
        console.log("Invalid Input");
        showMenu();
    }

}
showMenu();