import {useSearchParams} from "next/navigation";
import {useContext, useEffect} from "react";
import {GameContext} from "@/app/_contextProviders/GameContextProvider";
import {Game} from "@/app/data/types";

export const useGamePage = () => {
    const { updateGame } = useContext(GameContext);
    const searchParams = useSearchParams();
    const game = searchParams.get('game');

    useEffect(() => {
        if (game !== null) {
            const enumVals = Object.keys(Game).filter(key => isNaN(Number(key)))
            const index = enumVals.indexOf(game);
            updateGame(index);
        }
    }, []);

    const getLogo = () => {
        if (game !== null) {
            const enumVals = Object.keys(Game).filter(key => isNaN(Number(key)))
            const index = enumVals.indexOf(game);
            return index == Game.MySimsKingdom ? 'kingdom.webp' : 'logo.webp';
        }
        return '';
    }

    return {
        getLogo
    }
}