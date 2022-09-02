"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avenger = void 0;
class Avenger {
    constructor(name, realName) {
        this.name = name;
        this.realName = realName;
        console.log('Contstructor Avenger llamado');
    }
    getFullName() {
        return `${this.name} ${this.realName}`;
    }
}
exports.Avenger = Avenger;
