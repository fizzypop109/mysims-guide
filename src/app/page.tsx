import {MenuLink} from "@/app/_components/MenuLink/MenuLink";
import {Game} from "@/app/data/types";

export default function Home() {
  return (
    <div className="gradient h-[100svh] flex flex-col gap-[20px] p-[20px]">
        <img src="cozyBundle.webp" className="w-full sm:w-[500px] mx-auto" />

        <div className="flex flex-col gap-[10px] sm:w-[50%] sm:mx-auto">
            <MenuLink to={`/game?game=${Game[Game.MySims]}`}>
                <img src="logo.webp" className=""/>
            </MenuLink>
            <MenuLink to={`/game?game=${Game[Game.MySimsKingdom]}`}>
                <img src="kingdom.webp" />
            </MenuLink>
        </div>
    </div>
  );
}
