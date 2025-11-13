let anything : any

anything = 'ohin';


const kgToGmConvert = (input: string | number ): string | number | undefined =>{
        if (typeof input === 'number') {
            return input * 1000;
        }else if(typeof  input === 'string'){
            const [value] = input.split( " ")
            return `convert output ${Number(value) * 1000}`
        }
}


const result =  kgToGmConvert(2) as number;
console.log({result});


const result2 = kgToGmConvert('2 KG') as string;

  
console.log({result2});
  