import Head from "@/components/poliwhirl/head"
import Reload from "@/components/random/reload";

export default async function Poli() {
    const nb = Math.floor(Math.random() * 151) + 1;
    console.log(nb)

  const res = await fetch(`http://localhost:3000/api/?id=${nb}`)
  const data = await res.json()
  const gif = data.sprites.other.showdown.front_default
  // console.log(data.id)
  
    return (
        <div className="flex flex-col items-center">
          <Head name={data.name} gif={gif} id={data.id}></Head>
          <Reload></Reload>  
        </div>
    )
}