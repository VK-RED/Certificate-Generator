import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { BioDataCard } from "./BioDataCard"
import { VerifyCard } from "./VerifyCard"

export const ToggleTab = () => {
    return (
        <Tabs defaultValue="create" className="w-[400px] z-10 mt-10">

          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="verify">Verify</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <BioDataCard />
          </TabsContent>

          <TabsContent value="verify">
            <VerifyCard/>
          </TabsContent>

        </Tabs>
      )
}