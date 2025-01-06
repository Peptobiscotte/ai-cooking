import Counter from "@/components/home/counter";
import HomeForm from "@/components/home/form";

export default async function Home() {

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center text-6xl mt-16">
        Home
      </div>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <HomeForm></HomeForm>
      </div>
    </div>
  );
}
