const array = [1,6,null,undefined,false, 78, 12, true]

let encontrou = false

for(i=0;i<array.length;i++){
    if(array[i] == null || array[i] == NaN || array[i] == undefined){
        encontrou = true
        console.log("Neste array possui um: null, NaN ou um undefined? " + encontrou)
        break
    }
    else{
        console.log("Neste array possui um: null, NaN ou um undefined?" + encontrou)
    }
}