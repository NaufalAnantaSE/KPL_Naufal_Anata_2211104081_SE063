class DoorMachine {
    constructor() {
      this.states = {
        Terkunci: "Pintu terkunci",
        Terbuka: "Pintu tidak terkunci",
      };
      this.currentState = this.states.Terkunci;
    }
  
    openDoor() {
      console.log(this.currentState);
    }
  
    changeState(newState) {
      this.currentState = this.states[newState] || this.states.Terkunci;
    }
  }
  
const doorMachine = new DoorMachine();
doorMachine.openDoor(); 
doorMachine.changeState("Terbuka");
doorMachine.openDoor();