import React, {useEffect, useState} from "react";
import {DataContainerProps} from "@/app/_components/DataContainer/DataContainer";
import {Essence, Sim} from "@/app/data/types";
import {useSearchParams} from "next/navigation";

export const useDataContainer = (props: DataContainerProps) => {
    const [results, setResults] = useState<Essence[] | Sim[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();

    const essenceId = searchParams.get("essence");

    useEffect(() => {
        setResults(props.data);
        setLoading(false);

        if (essenceId) {
            const essence = [...props.data].find(e => e.id === essenceId);
            if (essence) {
                updateSearchTerm(essence.name);
            }
        }
    }, []);

    const onSearchInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        updateSearchTerm(e.currentTarget.value);
    }

    const updateSearchTerm = (newTerm: string) => {
        setSearchTerm(newTerm);

        let data: Sim[] | Essence[] = [];

        if (isEssence(props.data[0])) {
            data = props.data as Essence[];
            const newData = newTerm === '' ? data : data.filter(thing => thing.name.toLowerCase().includes(newTerm.toLowerCase()));
            setResults(newData);
        }

        if (isSim(props.data[0])) {
            data = props.data as Sim[];
            const newData = newTerm === '' ? data : data.filter(thing => thing.name.toLowerCase().includes(newTerm.toLowerCase()));
            setResults(newData);
        }
    }

    const clearSearch = () => {
        updateSearchTerm('');
    }

    const isEssence = (thing: any): thing is Essence => {
        return thing.descriptions !== undefined;
    }

    const isSim = (thing: any): thing is Sim => {
        return thing.residenceName !== undefined;
    }

    return {
        searchTerm,
        results,
        loading,
        clearSearch,
        onSearchInputChange,
        isEssence,
        isSim,
    }
}