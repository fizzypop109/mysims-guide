export enum Game {
    None,
    MySims,
    MySimsKingdom
}

export interface GameContextObject {
    game: Game;
    updateGame: (game: Game) => void;
}

export interface BaseData {
    id: string,
    name: string,
}

export interface Essence extends BaseData {
    descriptions: LocationSource[],
    type?: EssenceType,
    mana?: number
}

export interface Sim extends BaseData {
    nickname?: string,
    type?: SimType,
    primaryInterest?: EssenceType,
    secondaryInterest?: EssenceType,
    dislike?: EssenceType,
    starLevel?: number,
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
    Prospecting = "Prospecting",
    Socialising = "Socialising",
    Fishing = "Fishing",
    Trees = "Trees",
    Interaction = "Interaction",
    Mining = "Mining",
}

export enum Location {
    TownSquare = "Town Square",
    Desert = "Desert",
    Forest = "Forest",
    Garden = "Garden",
    Candypalooza = "Candypalooza",
    TheUnchartedIsle = "The Uncharted Isle",
    CapitalIsland = "Capital Island",
    CowboyJunction = "Cowboy Junction",
    Cutopia = "Cutopia",
    ForestOfTheElves = "Forest of the Elves",
    IsleOfMagic = "Isle of Magic",
    ReneesNaturePreserve = "Renée's Nature Preserve",
    RewardIsland = "Reward Island",
    RocketReef = "Rocket Reef",
    Spookane = "Spookane",
    TheRoyalAcademy = "The Royal Academy",
    TrevorIsland = "Trevor Island"
}

export interface LocationSource {
    locationOrSource: Location | Source,
    activities: string,
}