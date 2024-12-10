"use client"

import Link from "next/link";
import {EssenceCard} from "@/app/_components/EssenceCard/EssenceCard";
import {useDataContainer} from "@/app/_components/DataContainer/talons/useDataContainer";
import {Essence, Sim} from "@/app/data/types";
import {SimCard} from "@/app/_components/SimCard/SimCard";

export interface DataContainerProps {
    title: string,
    data: Essence[] | Sim[]
}

export const DataContainer = (props: DataContainerProps) => {
    const { searchTerm, results, updateSearchTerm, clearSearch, isEssence, isSim } = useDataContainer(props);

    return (
        <div className="flex flex-col items-center px-[40px] py-[20px] gap-[20px] h-[100svh]">
            <div className="flex items-center w-full gap-[20px]">
                <Link href="/">
                    <img className="w-[50px] h-[50px] object-contain" src="back.webp"/>
                </Link>
                <h1>{props.title}</h1>
            </div>

            <div className="w-full md:w-[50%] flex p-[10px] gap-[10px] rounded-lg bg-white">
                <input type="text" className="w-full" placeholder="Search..." value={searchTerm} onChange={updateSearchTerm} />
                { searchTerm !== '' && <button onClick={clearSearch}>X</button> }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] h-full overflow-y-scroll">
                { results.map(thing => {
                    if (isEssence(thing)) {
                        return <EssenceCard key={thing.id} essence={thing as Essence} />
                    } else if (isSim(thing)) {
                        return <SimCard key={thing.id} sim={thing as Sim} />
                    }
                    else {
                        return <div>Type error!</div>
                    }
                })}
            </div>
        </div>
    )
}