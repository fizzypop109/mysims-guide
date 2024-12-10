import Link from "next/link";
import classes from './MenuLink.module.scss'
import classNames from "classnames";

export interface MenuLinkProps {
    to: string;
    label: string;
}

export const MenuLink = (props: MenuLinkProps) => {
    return (
        <Link className={classNames("w-full p-[10px] text-center bg-white rounded-lg border-[5px] border-[var(--primary)]", classes.menuLink)} href={props.to}>{props.label}</Link>
    )
}