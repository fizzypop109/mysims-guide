"use client"

import {EssenceCard} from "@/app/_components/EssenceCard/EssenceCard";
import {useDataContainer} from "@/app/_components/DataContainer/talons/useDataContainer";
import {Essence, Sim} from "@/app/data/types";
import {SimCard} from "@/app/_components/SimCard/SimCard";
import {FilterIcon} from "@/app/_components/Icons/FilterIcon";
import {BackButton} from "@/app/_components/BackButton/BackButton";

export interface DataContainerProps {
    title: string,
    data: Essence[] | Sim[]
}

export const DataContainer = (props: DataContainerProps) => {
    const { searchTerm, results, loading, onSearchInputChange, clearSearch, isEssence, isSim } = useDataContainer(props);

    return (
        <div className="flex flex-col items-center px-[40px] py-[20px] gap-[20px] h-[100svh]">
            <div className="flex items-center relative w-full gap-[20px]">
                <BackButton/>
                <h1 className="pointer-events-none md:absolute left-0 right-0 md:mx-auto md:text-center">{props.title}</h1>
            </div>

            <div className="flex items-center justify-center gap-[10px] w-full">
                <div className="w-full md:w-[50%] flex p-[10px] gap-[10px] rounded-lg bg-white">
                    <input type="text" className="w-full" placeholder="Search..." value={searchTerm}
                           onChange={onSearchInputChange}/>
                    {searchTerm !== '' && <button onClick={clearSearch}>X</button>}
                </div>

                {/*<button className="bg-white border-[2px] border-[var(--primary)] h-full rounded-lg aspect-square flex items-center justify-center">*/}
                {/*    <FilterIcon widthClass="w-[30px]" heightClass="h-[30px]" colour="var(--primary)" />*/}
                {/*</button>*/}
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] h-full overflow-y-scroll scrollable">
                {loading ? <h1 className="sub-h1">Loading...</h1> : results.length > 0 ? results.map((thing, i) => {
                    if (isEssence(thing)) {
                        return <EssenceCard key={thing.id} essence={thing as Essence} />
                    } else if (isSim(thing)) {
                        return <SimCard key={thing.id} sim={thing as Sim} />
                    }
                    else {
                        return <div key={`error-${i}`}>Type error!</div>
                    }
                }) : <h1 className="sub-h1">No results!</h1>}
            </div>
        </div>
    )
}