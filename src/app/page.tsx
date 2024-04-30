import { TitleCard } from "@/components/TitleCard";
import { HeroCard } from "@/components/heroCard";
import { Marketing } from "@/components/marketing";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Marketing/>
      <TitleCard />
      <HeroCard/>
      <BackgroundBeams />
    </div>
  )
}

