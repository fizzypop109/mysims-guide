export interface BaseData {
    id: string,
    name: string,
}

export interface Essence extends BaseData {
    type: EssenceType,
    locations?: Location[],
    sources: Source[],
    descriptions: string[],
}

export interface Sim extends BaseData {
    nickname?: string,
    type: SimType,
    primaryInterest: EssenceType,
    secondaryInterest: EssenceType,
    dislike: EssenceType,
    starLevel: number,
    residenceName: string,
    tasks?: SimTask[]
}

export interface TaskEssence {
    essenceId: string,
    amount: number,
}

export interface TaskItem {
    item: string,
    essences: TaskEssence[],
}

export interface SimTask {
    items: TaskItem[]
}

export enum SimType {
    Townie,
    Commercial
}

export enum EssenceType {
    Cute,
    Fun,
    Geeky,
    Spooky,
    Studious,
    Tasty
}

export enum Source {
    Prospecting,
    Socialising,
    Fishing,
    Trees,
    Interaction,
}

export enum Location {
    TownSquare = "Town Square",
    Desert = "Desert",
    Forest = "Forest",
    Garden = "Garden"
}