class Instructor{
    name;
    desingation = 'programing hero'
    team ='https://web.programming-hero.com'
    loction;
    constructor(name, loction){
        this.name = name;
        this.loction = loction;
    }
    supportSession(time){
        console.log('SupportSession will start in 9.00');
    }
    quize(module){
        console.log('quize will find in end of this module');
    }
}
const amir = new Instructor('amir', 'sylhet')
console.log(amir);
amir.supportSession()
amir.quize()