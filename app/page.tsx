"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState<Array<{id:number, title:string}>>([]);

  useEffect(()=>{
    const fetchTodos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        console.log(data);
        setTodos(data);
      }
      
    fetchTodos();
  },[]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        </div>
         {
          todos.length === 0 ?
          <div>Loading..!</div> :
          todos.map(res=>(
            <div key={res.id}><p>{res.id}: {res.title}</p></div>
          ))
         }

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  )
}
