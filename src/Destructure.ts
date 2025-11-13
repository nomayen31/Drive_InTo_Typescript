// objet destructing 

// array destructure 


const user = {
    id:'123',
    name :{
        fristName :'Ohin',
        middleName : 'Hossain',
        lastName:'Nomayen'
    },
    gender:'male',
    fvtColor :'black'
}


// const myfvtColo = user.fvtColor;

// const mtMiddleName = user.name.middleName;

const{fvtColor} = user;
console.log(fvtColor);
