import {EssenceImage} from "@/app/_components/EssenceCard/EssenceImage";
import {Essence} from "@/app/data/types";
import { getEssenceImage, getTypeIcon } from "@/app/_helpers/getImages";

export interface EssenceCardProps {
    essence: Essence,
}

export const EssenceCard = ({ essence }: EssenceCardProps) => {
    return (
        <div className="flex flex-col gap-[10px] h-max md:h-auto items-center border-solid border-[10px] border-[var(--primary)] bg-white rounded-lg p-[20px]">

            <EssenceImage mainImage={getEssenceImage(false, essence.id)} coloursImage={getEssenceImage(true, essence.id)} essenceName={essence.name}/>

            <div className="flex gap-[10px] items-center">
                <img className="h-[30px] w-[30px] object-contain" src={getTypeIcon(essence.type)}/>
                <h3>{essence.name}</h3>
            </div>

            <div className="w-full flex flex-col items-start gap-[5px]">
                <p className="font-bold">How To Get</p>
                <div className="h-[2px] bg-[var(--primary)] w-full" />
                <ul className="list-disc">
                {essence.descriptions.map((desc, index) => (
                        <li key={`desc-${index}`} className="ml-[20px] first:mt-0 last:mb-0 m-[5px]">{desc}</li>))}
                </ul>
            </div>
        </div>
    )
}