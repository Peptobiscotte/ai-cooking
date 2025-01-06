import Head from "@/components/poliwhirl/head"

export default async function Poli() {
  const res = await fetch('http://localhost:3000/api/?id=61')
  const data = await res.json()
  const gif = data.sprites.other.showdown.front_default
  // console.log(data.id)
  
    return (
        <div>
          <Head name={data.name} gif={gif} id={data.id}></Head>
        </div>
    )
}