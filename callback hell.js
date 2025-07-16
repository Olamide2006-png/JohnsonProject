function task1(Callback){
    setTimeout(()=>{
        console.log("task1 is complete")
        Callback()
    },2000);
    
}
function task2(Callback){
    
    setTimeout(()=>{
        console.log("task 2 complete") 
        Callback()
    },1000);
}
function task3(Callback){
     setTimeout(()=>{
       console.log("task 3 complete")
        Callback()
    },3000);
}  
function task4(Callback){
     setTimeout(()=>{
       console.log("task 4 complete")
       Callback()  
    },1500);
   
}




task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All task complete")
            })
        })
    })
})