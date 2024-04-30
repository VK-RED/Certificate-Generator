import Link from "next/link"
import { Icons } from "./Icons"
import { ToolTip } from "./ToolTip"

export const Marketing = () => {
    return (
        <div className="absolute right-[5rem] top-[4.2rem] z-10 flex space-x-2">
            <div className="">
                <ToolTip/>
            </div>
            <Link href="https://github.com/VK-RED" target="_blank"
                className="cursor-pointer">
                <Icons.gitHub className="mr-2 h-8 w-8" />
            </Link>
        </div>
    )
}