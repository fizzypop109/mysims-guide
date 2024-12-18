import {useSearchParams} from "next/navigation";
import {useContext, useEffect} from "react";
import {GameContext} from "@/app/_contextProviders/GameContextProvider";
import {Game} from "@/app/data/types";

export const useGamePage = () => {
    const { updateGame } = useContext(GameContext);
    const searchParams = useSearchParams();
    const game = searchParams.get('game');

    useEffect(() => {
        updateGame(Game[game]);
    }, []);

    const getLogo = () => {
        return Game[game] == Game.MySimsKingdom ? 'kingdom.webp' : 'logo.webp';
    }

    return {
        getLogo
    }
}