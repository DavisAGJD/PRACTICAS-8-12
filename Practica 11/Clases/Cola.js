class Cola {
    constructor() {
        this.coches = [];
    }

    enqueue(coche) {
        this.coches.push(coche);
    }

    dequeue() {
        return this.coches.shift();
    }

    peek() {
        return this.coches[0];
    }

    size() {
        return this.coches.length;
    }
}

export default Cola;
