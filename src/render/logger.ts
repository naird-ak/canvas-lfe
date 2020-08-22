export default class Logger {
    messages: string[] = [];

    constructor() {}

    logMessage(msg: string) {
        this.messages.push(msg);
    }

    renderMessage(time) {
        if(Math.floor(time) % 10 == 0) {
            this.messages.forEach(msg => {
                console.log(msg)
            });
            this.messages = [];
        }
    }

}