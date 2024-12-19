import classes from './EssenceImage.module.scss';
import classNames from "classnames";

export interface EssenceImageProps {
    mainImage: string,
    coloursImage: string,
    essenceName: string,
}

export const EssenceImage = (props: EssenceImageProps) => {
    return (
        <div className={classNames("w-[150px] h-[150px] bg-transparent", classes.flipCard)}>
            <div className={classNames("relative w-full h-full text-center", classes.flipCardInner)}>
                <div className={classNames("absolute w-full h-full", classes.flipCardSide)}>
                    <img className="w-full h-full object-contain" src={props.mainImage} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = 'empty.svg'}} alt={`icon for ${props.essenceName}`}/>
                </div>
                <div className={classNames("absolute w-full h-full", classes.flipCardSide, classes.flipCardBack)}>
                    <img className="w-full h-full object-contain" src={props.coloursImage} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = 'empty.svg'}} alt={`colours for ${props.essenceName}`}/>
                </div>
            </div>
        </div>
    );
}