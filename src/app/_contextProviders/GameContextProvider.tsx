"use client"

import {createContext, PropsWithChildren, useState} from "react";
import {Game, GameContextObject} from "@/app/data/types";

export const GameContext = createContext<GameContextObject>({
    game: Game.None,
    updateGame: () => {}
});

export const GameContextProvider = ({ children }: PropsWithChildren) => {
    const [game, setGame] = useState<Game>(Game.None);

    const updateGame = (newGame: Game) => {
        setGame(newGame);
    }

    return (
        <GameContext value={{game, updateGame}}>
            {children}
        </GameContext>
    )
}