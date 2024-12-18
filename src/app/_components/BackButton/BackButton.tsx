"use client"

import {useRouter} from "next/navigation";

export const BackButton = () => {
    const router = useRouter();

    return (
        <button onClick={() => router.back()}>
            <img className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] object-contain" src="back.webp"/>
        </button>
    )
}