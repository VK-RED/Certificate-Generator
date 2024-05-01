import { ButtonRows } from "./ButtonRows"
import { CertRendererClient } from "./CertificateRendererClient"
import { ToggleTab } from "./ToggleTab"

export const HeroCard = () => {
    return (
        <div className="z-10 mt-10">
            <div className="flex justify-center items-center space-x-4 z-10">
                <ToggleTab/>
                <CertRendererClient/>
            </div>
            <ButtonRows className="mt-5"/>
        </div>
    )
}