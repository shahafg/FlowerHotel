// Enum for room states
const Room_STATE = Object.freeze({
    NOT_AVAILABLE: "Not Available",
    AVAILABLE: "Available",
});

const Room_clean = Object.freeze({
    CLEAN: "Clean",
    NOT_CLEAN: "Not Clean",
});

// Room class definition
class Room {
    constructor(roomnum, price, capacity, state, clean, Fname='', CheckIn='', CheckOut='') {
        this.roomnum = roomnum;
        this.price = price;
        this.capacity = capacity;
        this.state = state;
        this.clean = clean;
        this.Fname = Fname;
        this.CheckIn = CheckIn;
        this.CheckOut = CheckOut;
    }

    cleanRoom() {
        if (this.clean === Room_clean.NOT_CLEAN) {
            this.clean = Room_clean.CLEAN;
            console.log(`${this.roomnum} is now clean`);
            updateRoomDisplay(this);
        }
    }

    roomservice() {
        console.log(`${this.roomnum} had a room service`);
        this.price += 50;
        updateRoomDisplay(this);
    }

    book() {
        if (this.state === Room_STATE.AVAILABLE) {
            this.state = Room_STATE.NOT_AVAILABLE;
            console.log(`${this.roomnum} is now booked`);
            updateRoomDisplay(this);
        } else {
            console.log(`${this.roomnum} is not available for booking`);
        }
    }
}

// Initialize rooms
const rooms = [
    new Room("Room 101", 200, 4, Room_STATE.AVAILABLE, Room_clean.NOT_CLEAN),
    new Room("Room 102", 200, 3, Room_STATE.AVAILABLE, Room_clean.CLEAN),
    new Room("Room 103", 200, 5, Room_STATE.NOT_AVAILABLE, Room_clean.NOT_CLEAN),
    new Room("Room 104", 250, 4, Room_STATE.AVAILABLE, Room_clean.CLEAN),
    new Room("Room 105", 250, 3, Room_STATE.NOT_AVAILABLE, Room_clean.NOT_CLEAN),
    new Room("Room 106", 1050, 7, Room_STATE.AVAILABLE, Room_clean.CLEAN)
];

function createRoomCard(room) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-content">
            <div class="room-info">
                <h2>${room.roomnum}</h2>
                <p>Price: $${room.price}</p>
                <p>Capacity: ${room.capacity} people</p>
                <p>State: ${room.state}</p>
                <p>isClean: ${room.clean}</p>
            </div>

            <div class="reservation-info">
            <p>Fname: ${room.Fname}</p>
             <p>CheckIn: ${room.CheckIn}</p>
             <p>CheckOut: ${room.CheckOut}</p>
            </div>

            <div class="button-group">
                <button class="button clean" onclick="rooms[${rooms.indexOf(room)}].cleanRoom()">Clean</button>
                <button class="button service" onclick="rooms[${rooms.indexOf(room)}].roomservice()">Service</button>
                <button class="button book" onclick="rooms[${rooms.indexOf(room)}].book()">Book</button>
            </div>
        </div>
    `;
    return card;
}

function updateRoomDisplay(room) {
    const roomCard = document.querySelector(`[data-room="${room.roomnum}"]`);
    if (roomCard) {
        roomCard.querySelector('p:nth-child(2)').textContent = `Price: $${room.price}`;
        roomCard.querySelector('p:nth-child(4)').textContent = `State: ${room.state}`;
        roomCard.querySelector('p:nth-child(5)').textContent = `isClean: ${room.clean}`;
    }
}

function initializeDashboard() {
    const dashboard = document.getElementById('roomDashboard');
    rooms.forEach(room => {
        const card = createRoomCard(room);
        card.setAttribute('data-room', room.roomnum);
        dashboard.appendChild(card);
    });
}

// Initialize the dashboard when the page loads
window.onload = initializeDashboard;
