let data = {
    regEmail: "",
    regName: "",
    regPhone: ""
};

document.getElementById('register').onclick = function (event) {
    event.preventDefault();

    data.regEmail = document.getElementById('regEmail').value;
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.regEmail))) {
        alert("Invalid Email");
        return;
    }

    data.regName = document.getElementById('regName').value;
    if (!(/^[A-Za-z\s]+$/.test(data.regName))) {
        alert("Invalid Name");
        return;
    }

    data.regPhone = document.getElementById('regPhone').value;

    const phoneRegex = /^(\+\d{1,3}[-]?)?\d{10}$/;
    if (!phoneRegex.test(data.regPhone)) {
        alert("Invalid Phone");
        return;
    }
    window.location.href = "dashboard.html";
};

// DashBoard Configoration Using Enums
const Room_STATE = Object.freeze({
    // left side is the key, right is the value.
    NOT_AVAILABLE: "Not_Available",
    AVAILABLE: "Available",
    // Add Cancellation 
});

// set's the value to available 
let roomState = Room_STATE.AVAILABLE;

//The room is not available
roomState = Room_STATE.NOT_AVAILABLE;

// Class which represent the stracture of a room. 
class Room {
    price = 200;
    roomnum = "room";
    capacity = 4; // how many people can stay in the room. 
    state = false;
  
    //Clean funtion
    clean() {
        console.log(`this ${this.roomnum} is now clean`);
        this.state = !this.state; // update the state of the room from false to true.
        // this is a nicer way to write it instef of the if statment which Yassmin help me with.
}

    //roomservice funtion
    roomservice() {
        // UPDATE the price of the room which includes the room service.
        //for now I do not a have a varibale to hold the price. 
        console.log(`this ${this.roomnum} had a room service`);
        this.price = this.price + 50;
    }

    roomservice() {
        // UPDATE the cnt for the price of the room which includes the room service.
        //for now I do not a have a varibale to hold the price. 
        console.log(`this ${this.roomnum} had a room service`);
    }

}
   

// Initialize an array of 6 rooms
const rooms = [
    new Room("room101", 200, 4, Room_STATE.AVAILABLE),
    new Room("room102", 200, 3, Room_STATE.AVAILABLE),
    new Room("room103", 200, 5, Room_STATE.NOT_AVAILABLE),
    new Room("room104", 250, 4, Room_STATE.AVAILABLE),
    new Room("room105", 250, 3, Room_STATE.NOT_AVAILABLE),
    new Room("room106", 1050, 7, Room_STATE.AVAILABLE)
];