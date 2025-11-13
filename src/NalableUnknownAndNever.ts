const getUser = (input: string) =>{
        if (input) {
            console.log(`from DB : ${input}`);
        }else{
            console.log(`from DB : All user`);
        }
}

getUser('ohin')



const DiscountCalculator = (input:unknown) =>{
        if (typeof input === 'number') {
            const discoundPrice = input *0.1;
            console.log(discoundPrice);
        }else if(typeof input === 'string'){
            const [priceString] = input.split(" ")
            console.log(Number(priceString) *0.1);
        }else{
            console.log('Wrong Input');
            
}
}

DiscountCalculator(100)
DiscountCalculator('100 TK')
DiscountCalculator(null)



const throwError = (msg : string): never =>{
        throw new Error (msg)
}

throwError("Error........... .")