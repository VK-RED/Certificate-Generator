import { atom } from "recoil";

export const certAtom = atom({
    key:'certificateAtom',
    default:{
        id:"",
        name:""
    }
})