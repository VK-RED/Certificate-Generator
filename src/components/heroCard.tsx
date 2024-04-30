import { CertRendererClient } from "./CertificateRendererClient"
import { ToggleTab } from "./ToggleTab"

export const HeroCard = () => {
    return (
        <div className="z-10 mt-10 flex justify-center items-center space-x-4">
            <ToggleTab/>
            <CertRendererClient/>
        </div>
    )
}