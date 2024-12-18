"use client"

import {DataContainer} from "@/app/_components/DataContainer/DataContainer";
import {kingdomEssences, mySimsEssences} from "@/app/data/essences";
import {Suspense, useContext} from "react";
import {GameContext} from "@/app/_contextProviders/GameContextProvider";
import {Game} from "@/app/data/types";

export default function EssencePage() {
    const {game} = useContext(GameContext);

    return (
        <div className="gradient">
            <Suspense>
                <DataContainer title="Essences" data={game == Game.MySims ? mySimsEssences : kingdomEssences} />
            </Suspense>
        </div>
    );
}
