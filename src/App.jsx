import { useState } from "react"
import people from "./data/data"
import { useEffect } from "react"



const App = () => {
  const[data,setData]=useState(people)
  const[index,setIndex]=useState(0)



  useEffect(()=>{
    if(index<0){
      setIndex(data.length-1)
    }
    if(index>data.length-1){
      setIndex(0)
    }
  },[index])

  return (
    <main>
      <h1 className="text-center text-2xl font-serif p-4">People slider</h1>
      <div className="h-1 w-20 mx-auto my-2 bg-purple-400"></div>

      <section className="max-w-[80vw] mx-auto relative h-[60vh] my-8 border border-solid border-purple-400">
        {data.map((onePerson,currentIn)=>{
          const{id, name ,image , title, quote}=onePerson

          let styleOne={
            transform:"translateX(100%)",
            opacity:0
          }

          if(currentIn=== index){
            styleOne={
              transform:"translateX(0%)",
              opacity:1
            }
  
          }

          if(currentIn-1 == index){
            styleOne={
              transform:"translateX(-100%)",
              opacity:0
            }
  
          }

          return (<article style={styleOne} className=" transition-all duration-700 w-full h-full px-4 absolute flex flex-col items-center pt-4 ">
              <div className="size-24 rounded-full mt-8 overflow-hidden w-1/5 border-2 border-dashed border-purple-400">
              <img src={image} className="size-full object-cover " />
              </div>

              <div className="flex flex-col justify-center items-center h-full space-y-8">
              <p>{name}</p>
              <p>{title}</p>
              <p>{quote}</p>
              </div>
          </article>)
        })}
        <button
  className="border absolute right-2 top-1/2 bottom-1/2 h-7 border-purple-400 border-solid z-20 text-purple-400 bg-purple-300 px-2"
  onClick={() => setIndex(index - 1)}
>
  click
</button>
<button
  className="border absolute left-2 top-1/2 bottom-1/2 h-7 border-purple-400 border-solid z-20 text-purple-400 bg-purple-300 px-2"
  onClick={() => setIndex(index + 1)}
>
  click
</button>
      </section>
      
    </main>
  )
}

export default App
