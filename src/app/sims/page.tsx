"use client"

import {DataContainer} from "@/app/_components/DataContainer/DataContainer";
import {kingdomSims, mySimsSims} from "@/app/data/sims";
import {Suspense, useContext} from "react";
import {GameContext} from "@/app/_contextProviders/GameContextProvider";
import {Game} from "@/app/data/types";

export default function SimPage() {
    const { game } = useContext(GameContext);

    return (
        <div className="gradient">
            <Suspense>
                <DataContainer title="Sims" data={game == Game.MySims ? mySimsSims : kingdomSims} />
            </Suspense>
        </div>
    );
}
