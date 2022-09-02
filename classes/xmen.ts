import { Avenger } from "./hero";

export class Xmen extends Avenger {

    constructor(
        name: string,
        realName: string,
        public isMutant: boolean
    ){
        super( name, realName );
        console.log('Constructor Xmen llamado');
    }

    getFullNameDesdeXmen(){
        super.getFullName();
    }
}