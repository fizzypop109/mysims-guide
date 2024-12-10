import {EssenceType} from "@/app/data/types";

export const getEssenceImage = (colours: boolean, id: string) => {
    let colourExtension = colours ? '-colours' : '';
    return `essences/${id}${colourExtension}.webp`;
}

export const getSimImage = (id: string) => {
    return `sims/${id}.webp`;
}

export const getTypeIcon = (type: EssenceType) => {
    return `types/${EssenceType[type].toLowerCase()}.webp`;
}