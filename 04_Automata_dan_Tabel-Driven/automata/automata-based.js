const readline = require('readline');  

const rl = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout  
});  

const State = {  
    START: 'START',  
    GAME: 'GAME',  
    PAUSE: 'PAUSE',  
    EXIT: 'EXIT'  
};  

let state = State.START;  
const screenNames = {  
    [State.START]: 'START',  
    [State.GAME]: 'GAME',  
    [State.PAUSE]: 'PAUSE',  
    [State.EXIT]: 'EXIT'  
};  

function displayScreen() {  
    console.log(`${screenNames[state]} SCREEN`);  
    rl.question('Enter Command: ', (command) => {  
        handleCommand(command);  
    });  
}  

function handleCommand(command) {  
    switch (state) {  
        case State.START:  
            if (command === 'ENTER') {  
                state = State.GAME;  
            } else if (command === 'QUIT') {  
                state = State.EXIT;  
            }  
            break;  
        case State.GAME:  
            if (command === 'ESC') {  
                state = State.PAUSE;  
            }  
            break;  
        case State.PAUSE:  
            if (command === 'BACK') {  
                state = State.GAME;  
            } else if (command === 'HOME') {  
                state = State.START;  
            } else if (command === 'QUIT') {  
                state = State.EXIT;  
            }  
            break;  
    }  

    if (state !== State.EXIT) {  
        displayScreen();  
    } else {  
        console.log('EXIT SCREEN');  
        rl.close();  
    }  
}  

// Start the application  
displayScreen();