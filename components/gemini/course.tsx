'use client'

type CourseProps = {
    isCourse: string;
    setIsCourse: React.Dispatch<React.SetStateAction<string>>;
  };

export default function Course({ isCourse, setIsCourse}: CourseProps) {
    

    const handleCourse = function(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const currentChoice = e.currentTarget.id
        setIsCourse(currentChoice)
    }

    return (
        <div className="flex justify-center gap-12 py-16">
            <button id="starter" onClick={handleCourse} className={`text-zinc-950  font-bold  rounded-md w-24 h-24 md:w-48 md:h-48 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300 bg-starter bg-cover ${isCourse === 'starter' ? 'scale-125': ''}`}><p className="text-xl md:text-4xl">Starter</p></button>
            <button id="main" onClick={handleCourse} className={`text-zinc-950  font-bold  rounded-md w-24 h-24 md:w-48 md:h-48 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300 bg-main bg-cover ${isCourse === 'main' ? 'scale-125': ''}`}><p className="text-xl md:text-4xl">Main</p></button>
            <button id="dessert" onClick={handleCourse} className={`text-zinc-950  font-bold  rounded-md w-24 h-24 md:w-48 md:h-48 flex items-center justify-center hover:scale-125 transition ease-in-out duration-300 bg-dessert bg-cover ${isCourse === 'dessert' ? 'scale-125': ''}`}><p className="text-xl md:text-4xl">Dessert</p></button>
        </div>
    )
}
