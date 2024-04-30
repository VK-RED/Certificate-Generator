import { selector } from "recoil";
import { certAtom } from "../atoms/cert";

export const certSelector = selector({
    key:"certificateSelector",
    get: ({get}) => {
        const cert = get(certAtom);
        return cert;
    }
})