import {IconProps} from "@/app/_components/Icons/IconProps";

export const ChevronIcon = (props: IconProps) => {
    return (
        <svg className={`${props.widthClass} ${props.heightClass}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke={props.colour ? props.colour : "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}