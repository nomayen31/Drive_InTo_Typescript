const arrayOfNumber  : number[] = [1,4,6];

const arrayOfString : string[] = ["2","4","6",]


const arrayOfSringUsingMap : string[] = arrayOfNumber.map((num)=>num.toString())


console.log(arrayOfSringUsingMap);


type AreaOfNum = {
    height :number;
    width: number;
};

// type AreaOfString = {
//     height: string;
//     width: string
// }

type height = AreaOfNum['height'];


type AreaOfString = {
    [key in 'height' | 'width'] : string
}

type AreaOfBool = {
    [key in 'height' | 'width'] : boolean
}