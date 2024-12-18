"use client"

import {MenuLink} from "@/app/_components/MenuLink/MenuLink";
import {BackButton} from "@/app/_components/BackButton/BackButton";
import {useGamePage} from "@/app/game/talons/useGamePage";

export default function GamePage() {
    const { getLogo } = useGamePage();

    return (
        <div className="gradient h-[100svh] flex flex-col gap-[20px] p-[20px]">
            <BackButton />

            <img src={getLogo()} className="w-full sm:w-[500px] mx-auto" />

            <div className="flex flex-col gap-[10px] sm:w-[50%] sm:mx-auto">
                <MenuLink to="/essences">
                    Essences
                </MenuLink>
                <MenuLink to="/sims">
                    Sims
                </MenuLink>
            </div>
        </div>
    );
}
