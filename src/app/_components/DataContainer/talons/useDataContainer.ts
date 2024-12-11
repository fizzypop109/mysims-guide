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
        setResults([...props.data]);
        setLoading(false);

        if (essenceId) {
            const essence = [...props.data].find(e => e.id === essenceId);
            updateSearchTerm(essence.name);
        }
    }, []);

    const onSearchInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        updateSearchTerm(e.currentTarget.value);
    }

    const updateSearchTerm = (newTerm: string) => {
        setSearchTerm(newTerm);
        setResults(newTerm == '' ? [...props.data] : [...props.data].filter(thing => thing.name.toLowerCase().includes(newTerm.toLowerCase())));
    }

    const clearSearch = () => {
        updateSearchTerm('');
    }

    const isEssence = (thing: any): thing is Essence => {
        return thing.sources !== undefined;
    }

    const isSim = (thing: any): thing is Sim => {
        return thing.primaryInterest !== undefined;
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