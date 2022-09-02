
export class Avenger {

    constructor(
        public name: string,
        private realName: string,
    ){
        
        console.log('Contstructor Avenger llamado');
    }

    protected getFullName(){
        return `${this.name} ${this.realName}`;
    }

}




