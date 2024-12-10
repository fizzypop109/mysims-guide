import {Sim, SimType} from "@/app/data/types";
import {getSimImage, getTypeIcon} from "@/app/_helpers/getImages";
import {StarIcon} from "@/app/_components/Icons/StarIcon";

export interface SimCardProps {
    sim: Sim,
}

export const SimCard = ({ sim }: SimCardProps) => {
    return (
        <div className="flex flex-col gap-[10px] h-max md:h-auto items-center border-solid border-[10px] border-[var(--primary)] bg-white rounded-lg p-[20px]">

            <img className="h-[250px]" src={getSimImage(sim.id)} />

            <div className="flex flex-col text-center gap-[10px] items-center">
                <h3>{sim.name}</h3>

                    <div className="flex">
                        {[...Array(5)].map((_, i) => <StarIcon
                            key={`star-${i}`} colour={i < sim.starLevel ? "var(--star)" : "var(--primary)"} stroke="var(--primary)" widthClass="w-[20px]"
                            heightClass="h-[20px]"/>
                        )}
                    </div>

                <p>{sim.nickname ? sim.nickname : sim.name} is a {SimType[sim.type]} sim {sim.residenceName == 'N/A' ? 'who has no residence.' : `who resides at ${sim.residenceName}`}</p>
                <div className="flex gap-[20px]">
                    <div className="flex flex-col">
                        <p className="font-bold">Interests:</p>
                        <div
                            className="grid grid-cols-2 p-[10px] gap-[20px] border-[2px] border-[var(--primary)] rounded-lg">
                            <img src={getTypeIcon(sim.primaryInterest)}/>
                            <img src={getTypeIcon(sim.secondaryInterest)}/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Dislike:</p>
                        <div className="grid grid-cols-1 p-[10px] border-[2px] border-[var(--primary)] rounded-lg">
                            <img src={getTypeIcon(sim.dislike)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}