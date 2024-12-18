import {Game, Sim, SimType} from "@/app/data/types";
import {getEssenceImage, getSimImage, getTypeIcon} from "@/app/_helpers/getImages";
import {StarIcon} from "@/app/_components/Icons/StarIcon";
import classNames from "classnames";
import {useSimCard} from "@/app/_components/SimCard/talons/useSimCard";
import {ChevronIcon} from "@/app/_components/Icons/ChevronIcon";
import Link from "next/link";
import {useContext} from "react";
import {GameContext} from "@/app/_contextProviders/GameContextProvider";

export interface SimCardProps {
    sim: Sim,
}

export const SimCard = ({ sim }: SimCardProps) => {
    const { tasksOpen, toggleTasks } = useSimCard();
    const { game } = useContext(GameContext);

    return (
        <div className="flex flex-col gap-[10px] h-max md:h-auto items-center border-solid border-[10px] border-[var(--primary)] bg-white rounded-lg p-[20px]">

            <img className="h-[250px]" src={getSimImage(sim.id, game)} />

            <div className="flex flex-col text-center gap-[10px] items-center">
                <h3>{sim.name}</h3>

                { sim.starLevel !== undefined && (
                    <div className="flex">
                        {[...Array(5)].map((_, i) =>
                            <StarIcon key={`star-${i}`} colour={i < sim.starLevel ? "var(--star)" : "var(--primary)"}
                                      stroke="var(--primary)" widthClass="w-[20px]" heightClass="h-[20px]"/>
                        )}
                    </div>
                )}

                <p>{sim.nickname ? sim.nickname : sim.name} {game == Game.MySimsKingdom ? `lives on ${sim.residenceName}`
                    : `is a ${SimType[sim.type]} sim ${sim.residenceName == 'N/A' ? 'who has no residence.' : `who lives at ${sim.residenceName}`}`}</p>

                {sim.primaryInterest !== undefined && sim.secondaryInterest !== undefined && sim.dislike !== undefined && (
                    <div className="flex gap-[20px]">
                        <div className="flex flex-col">
                            <p className="font-bold">Interests:</p>
                            <div
                                className="grid grid-cols-2 p-[10px] gap-[20px] border-[2px] border-[var(--primary)] rounded-lg">
                                <img className="w-[50px]" src={getTypeIcon(sim.primaryInterest)}/>
                                <img className="w-[50px]" src={getTypeIcon(sim.secondaryInterest)}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Dislike:</p>
                            <div className="grid grid-cols-1 p-[10px] border-[2px] border-[var(--primary)] rounded-lg">
                                <img className="w-[50px]" src={getTypeIcon(sim.dislike)}/>
                            </div>
                        </div>
                    </div>
                )}

                {sim.tasks && (
                    <div className="w-full">
                        <button onClick={toggleTasks}
                                className="cursor-pointer bg-[var(--primary)] w-full py-[5px] px-[10px] text-white flex justify-between items-center">
                            Tasks
                            <div className={tasksOpen ? 'rotate-180' : ''}>
                                <ChevronIcon widthClass="w-[20px]" heightClass="h-[20px]" colour="white"/>
                            </div>
                        </button>
                        {tasksOpen && (
                            <div className="w-full border-[2px] border-t-0 border-[var(--primary)]">
                                <table className="w-full">
                                    <thead className="border-b-[2px] border-b-[var(--primary)]">
                                    <tr>
                                        <th className="border-r-[2px] border-r-[var(--primary)]">Task</th>
                                        <th className="border-r-[2px] border-r-[var(--primary)]">Item</th>
                                        <th>Essences</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {sim.tasks.map((task, index) =>
                                        task.items.map((item, i) =>
                                            <tr className={classNames("w-full border-b-[var(--primary)] last:border-b-0", i < task.items.length - 1 ? 'border-b-[1px]' : 'border-b-[2px]')} key={`item-${i}`}>
                                                { i == 0 && (
                                                    <td className="border-r-[2px] border-r-[var(--primary)]" rowSpan={task.items.length}>
                                                        {index + 1}
                                                    </td>
                                                )}
                                                <td className="border-r-[2px] border-r-[var(--primary)]">
                                                    {item.item}
                                                </td>
                                                <td>
                                                    {item.essences.map((essence, i) =>
                                                            <div key={`essence-${i}`}
                                                                 className="flex items-center gap-[5px] justify-center">
                                                                {essence.amount}
                                                                <Link href={`/essences?essence=${essence.essenceId}`}>
                                                                    <img className="w-[30px] h-[30px]"
                                                                         src={getEssenceImage(false, essence.essenceId, game)}/>
                                                                </Link>
                                                            </div>
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}