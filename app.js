import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const todos = [];

const showMenu = () => {

    console.log("\n1:Add a task");
    console.log("2:view task");
    console.log("3.Exit");

    rl.question("Choos an option: ", handleInput)
}

const handleInput = (option) => {

    if (option === "1") {
        rl.question("Enter the task: ", (task) => {
            todos.push(task);
            console.log("Task added:", task);
            showMenu()
        })

    } else if (option === "2") {
        console.log("\n your todo lists")
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`)

        })
        showMenu()

    } else if (option === "3") {
        console.log('Good Byee');
        rl.close();

    } else {
        console.log("Invalid Option. Please try again ");

    }
}
showMenu();