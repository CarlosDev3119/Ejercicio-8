"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xmen = void 0;
const hero_1 = require("./hero");
class Xmen extends hero_1.Avenger {
    constructor(name, realName, isMutant) {
        super(name, realName);
        this.isMutant = isMutant;
        console.log('Constructor Xmen llamado');
    }
    getFullNameDesdeXmen() {
        super.getFullName();
    }
}
exports.Xmen = Xmen;
