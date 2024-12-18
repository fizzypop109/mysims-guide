import {EssenceImage} from "@/app/_components/EssenceCard/EssenceImage";
import {Essence, Game} from "@/app/data/types";
import { getEssenceImage, getTypeIcon } from "@/app/_helpers/getImages";
import {useContext} from "react";
import {GameContext} from "@/app/_contextProviders/GameContextProvider";

export interface EssenceCardProps {
    essence: Essence,
}

export const EssenceCard = ({ essence }: EssenceCardProps) => {
    const { game } = useContext(GameContext);

    return (
        <div id={essence.id} className="flex flex-col gap-[10px] h-max md:h-auto items-center border-solid border-[10px] border-[var(--primary)] bg-white rounded-lg p-[20px]">

            <EssenceImage mainImage={getEssenceImage(false, essence.id, game)} coloursImage={getEssenceImage(true, essence.id, game)} essenceName={essence.name}/>

            <div className="flex gap-[10px] items-center">
                {game == Game.MySims &&
                    <img className="h-[30px] w-[30px] object-contain" src={getTypeIcon(essence.type == undefined ? null : essence.type)}/>
                }
                <h3>{essence.name}</h3>
            </div>

            <div className="w-full flex flex-col items-start gap-[5px]">
                <p className="font-bold">How To Get</p>
                <div className="h-[2px] bg-[var(--primary)] w-full" />
                <ul className="list-disc">
                {essence.descriptions.map((desc, index) => (
                        <li key={`desc-${index}`} className="ml-[20px] first:mt-0 last:mb-0 m-[5px]">{desc.locationOrSource}: {desc.activities}</li>))}
                </ul>
            </div>
        </div>
    )
}