import {EssenceType, Game} from "@/app/data/types";

export const getEssenceImage = (colours: boolean, id: string, game: Game) => {
    if (game == Game.MySims) {
        let colourExtension = colours ? '-colours' : '';
        return `essences/${id}${colourExtension}.webp`;
    } else if (game == Game.MySimsKingdom) {
        let colourExtension = colours ? '-3d' : '';
        return `essences/k-${id}${colourExtension}.webp`;
    }
}

export const getSimImage = (id: string, game: Game) => {
    const extension = game == Game.MySimsKingdom ? 'k-' : '';
    return `sims/${extension}${id}.webp`;
}

export const getTypeIcon = (type: EssenceType | null) => {
    if (type !== null) {
        return `types/${EssenceType[type].toLowerCase()}.webp`;
    }

    return '';
}