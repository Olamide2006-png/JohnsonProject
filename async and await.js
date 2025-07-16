//async makes a function return a promise
//await allows a function to wait for a promise

function walkDog(){
  
    return new Promise((resolve, reject) => {
          setTimeout(()=>{
            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕‍🦺");
            }
            else{
                reject("You didn't walk the dog 🐕‍🦺");
            }
            
        
    },1500)
    })

}
function cleanKitchen(){
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const cleanKit = true;
            if(cleanKit){
                resolve("You clean the kitchen🔪");
            }
            else{
                reject("you didn't Clean the kitchen 🔪");
            }
            
       
    },2500)
    })
}
function takeOutTrash(){
    
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        const trashOut = true;
        if(trashOut){
            resolve("You take out the trash💩");
        }
        else{
            reject("You Did't Take out the trash💩");
        }
       
    },500) 
    })
}
async function doChores(params) {
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult   = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult  = await takeOutTrash();
    console.log(takeOutTrashResult);
    console.log("You finished all the chores")
    }
    catch(error){
        console.error(error)
    }
}
doChores()