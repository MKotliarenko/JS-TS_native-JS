export function sum (a:number, b:number){
    return a+b;
}
export function mult (a:number, b:number){
    return a*b;
}

 function splitIntoWords (sentense:string){
    const words = sentense.toLowerCase().split(" " + "")
     return  words.filter(a=>a!==""&&a!=="-")
        .map(a=>a.replace("!","").replace(".",""));
}


export default splitIntoWords