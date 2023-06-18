class TeamMember{
    name;
    loction;
    constructor(name, loction){
        this.name = name;
        this.loction = loction;
    }
    provideFeedback(){
        console.log(` ${this.name} thank you for your feedback.`);
    }
}
class Instructor extends TeamMember{
    desingation = 'programing hero'
    team ='https://web.programming-hero.com'
    constructor(name, loction){
        super(name, loction);
    }
    supportSession(time){
        console.log('SupportSession will start in 9.00');
    }
    quize(module){
        console.log('quize will find in end of this module');
    }
}

class Devoloper extends TeamMember{
    desingation = 'programing hero'
    team ='https://web.programming-hero.com'
    tech;
    constructor(name, loction, tech){
        super(name, loction);
        this.tech = tech;
    }
    DevoloperFeature(feature){
        console.log(`Pleace devolope this feature ${feature}`);
    }
    release(version){
        console.log(`please release the version ${version}`);
    }
    
}
const rohim = new Devoloper('rohim', 'sylhet', 'web')
console.log(rohim);
rohim.provideFeedback()