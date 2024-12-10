import React, {useEffect, useState} from "react";
import {DataContainerProps} from "@/app/_components/DataContainer/DataContainer";
import {Essence, Sim} from "@/app/data/types";

export const useDataContainer = (props: DataContainerProps) => {
    const [results, setResults] = useState<Essence[] | Sim[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setResults([...props.data]);
    }, [])

    const updateSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value);
        setResults(e.currentTarget.value == '' ? [...props.data] : [...props.data].filter(thing => thing.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }

    const clearSearch = () => {
        setSearchTerm('');
        setResults([...props.data]);
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
        clearSearch,
        updateSearchTerm,
        isEssence,
        isSim,
    }
}