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

export const VerifyCard = () => {
    return (
        <Card className="z-10 bg-opacity-100 border-slate-700 min-w-[400px]">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Verify Certificate</CardTitle>
                <CardDescription>
                    {`Verify the Generated Certificate`}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">{`Certificate ID`}</Label>
                    <Input id="name" type="text" placeholder="4rnjkn3"/>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Create</Button>
            </CardFooter>
        </Card>
    )
}