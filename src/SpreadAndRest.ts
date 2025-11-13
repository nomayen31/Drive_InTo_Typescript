//  Spread operator 

const friend = ['rahim ', 'karim'];


const schoolFriend = ['pintu', 'chinku', 'rinku']


const collegeFriend = ['Mr.smart', 'mr very smart']



friend.push(...schoolFriend)
friend.push(...collegeFriend)

console.log(friend);


const user = {name : 'ohin', phone:'017985656'};
const otherInfo = {hobby: 'outing', favouriteColor:'black'};
const userInfo = {...user, ...otherInfo}

console.log(userInfo);


// rest operator 




const sendInvite = (...friends:string[])=>{
 
    friends.forEach((f:string)=>{
        console.log(`Send invitation tp ${friend}`);
    })
}

sendInvite('pintu','chinti','bulbulaa')