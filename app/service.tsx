export const getData = async ():Promise<Array<{id:number, title:string}>> =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data:Array<{id:number, title:string}> = await res.json();
    console.log(data);
    return data;
}