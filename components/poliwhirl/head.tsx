interface NameProps {
    name: string;
    gif: string
    id: number
  }

import Image from "next/image";

export default function Head({name, gif, id}: NameProps) {
    const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);

    return(
        <div className="flex flex-col items-center pt-16 gap-4">
            <h1 className="text-4xl font-bold">{nameUpperCase}</h1>
            <Image alt="poli-gif" src={gif} width={80} height={40}></Image>
            <p># {id}</p>
        </div>    
    )
}