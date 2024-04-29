import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
  

export const BioDataCard = () =>{
    return (
        <Card className="z-10 bg-opacity-100 border-slate-700 mt-10 min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create a New one</CardTitle>
                <CardDescription>
                    {`Enter your Name & Email below`}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Adithiyan"/>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="adithiyan@example.com" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Create</Button>
            </CardFooter>
        </Card>

    )
}