import Link from "next/link"
import { Icons } from "./Icons"
import { ToolTip } from "./ToolTip"

export const Marketing = () => {
    return (
        <>
            <div className="relative left-[34rem] top-[1rem] z-10">
                <ToolTip/>
            </div>
            <Link href="https://github.com/VK-RED" target="_blank"
                className="absolute top-[4.2rem] right-[4rem] z-10 cursor-pointer">
                <Icons.gitHub className="mr-2 h-8 w-8" />
            </Link>
        </>
    )
}