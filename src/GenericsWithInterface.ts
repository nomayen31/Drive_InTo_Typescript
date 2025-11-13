interface Developer <T> {
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releaseyear: string;
    };
    smartWatch: T
}


const poorDeveloper : Developer <{
    heartRate:string,
    stopWatch:boolean,
}>= {
    name : 'ohin',
    salary:20,
    device:{
        brand:'lanevo',
        model:'A21',
        releaseyear:'2010' 
    },
    smartWatch:{
        heartRate:'200',
        stopWatch:true,
    }
}
const RichDeveloper : Developer <{
    heartRate:string,
    callsupport: boolean,
    calculater:boolean,
    AiFeature: boolean,
}>= {
    name : 'Nomayen',
    salary:200,
    device:{
        brand:'Mac',
        model:'M1',
        releaseyear:'2020' 
    },
    smartWatch:{
        heartRate:'200',
        calculater:true,
        callsupport:true,
        AiFeature:true,
    }
}