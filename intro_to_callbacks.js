class Clock {
    constructor() {
        // 1. Create a Date object.
        this.date = new Date()
        // 2. Store the hours, minutes, and seconds.
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        // 3. Call printTime.
        this.printTime(this.hours, this.minutes, this.seconds);
        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000)
    }
    printTime(hours, minutes, seconds) {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${hours}:${minutes}:${seconds}`);
    }
    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.seconds++;
        if (this.seconds === 60) {
            this.minutes++;
            this.seconds = 0;
        } 
        if (this.minutes === 60) {
            this.hours++;
            this.minutes = 0;
        } 
        if (this.hours === 12) {
            this.hours = 1;
        }
        this.printTime(this.hours, this.minutes, this.seconds);
    }
}
const clock = new Clock();





