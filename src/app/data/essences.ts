import {Essence, EssenceType, Location, Source} from "@/app/data/types";

export const mySimsEssences: Essence[] = [
    {
        id: '8-ball',
        name: '8-Ball',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Prospecting (near the Train Station)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Fun Sims'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Dropped by Travis (if friends or best friends)'
            }
        ]
    },
    {
        id: 'action-figure',
        name: 'Action Figure',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Prospecting (Geeky Prospecting Cave)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Geeky Sims'
            }
        ]
    },
    {
        id: 'alien',
        name: 'Alien',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Junkyard, near the entrance to the Junkyard Cave)'
            }
        ]
    },
    {
        id: 'amber',
        name: 'Amber',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (top right area)'
            }
        ]
    },
    {
        id: 'amethyst',
        name: 'Amethyst',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (top right area)'
            }
        ]
    },
    {
        id: 'angry',
        name: 'Angry',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Source.Socialising,
                activities: "Being Mean to Commercial, Fun, Geeky, or Tasty Sims"
            },
            {
                locationOrSource: Source.Socialising,
                activities: "Being Nice to Vic Vector"
            },
            {
                locationOrSource: Source.Socialising,
                activities: "Being Nice to Sims you don't have a good or average relationship with"
            }
        ]
    },
    {
        id: 'bacon',
        name: 'Bacon',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (near the waterfall and Knight Orchard)'
            }
        ]
    },
    {
        id: 'banana',
        name: 'Banana',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (in the orchards)'
            }
        ]
    },
    {
        id: 'bat',
        name: 'Bat',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (near the Train Station)'
            }
        ]
    },
    {
        id: 'bat-fish',
        name: 'Bat Fish',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (in the stream near the Train Station)'
            }
        ]
    },
    {
        id: 'beach-ball',
        name: 'Beach Ball',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Fishing (by the East pier at the beach)'
            }
        ]
    },
    {
        id: 'beta-fish',
        name: 'Beta Fish',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (in the pond)'
            }
        ]
    },
    {
        id: 'black-apple',
        name: 'Black Apple',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (Spooky Forest Cave)'
            }
        ]
    },
    {
        id: 'black-rose',
        name: 'Black Rose',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (near the jewel essences prospecting field)'
            }
        ]
    },
    {
        id: 'cake',
        name: 'Cake',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (near the waterfall and gate leading to the Knight Orchard)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: "Stove Oven (Bake)"
            }
        ]
    },
    {
        id: 'cherry-blossom',
        name: 'Cherry Blossom',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Karaoke Machine (Perform)'
            }
        ]
    },
    {
        id: 'chocolate-cake',
        name: 'Chocolate Cake',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (near the waterfall and gate leading to the Knight Orchard)'
            }
        ]
    },
    {
        id: 'clown-fish',
        name: 'Clown Fish',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Fishing (in the pond in front of your house)'
            }
        ]
    },
    {
        id: 'club',
        name: 'Club',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Treasure Cave)'
            }
        ]
    },
    {
        id: 'compass',
        name: 'Compass',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (top left area)'
            }
        ]
    },
    {
        id: 'crab',
        name: 'Crab',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Fishing (in the lake)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Counter (Make Sushi)'
            }
        ]
    },
    {
        id: 'cube-puzzle',
        name: 'Cube Puzzle',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'dark-wood',
        name: 'Dark Wood',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Cute or Studious essence Trees (Chop)'
            }
        ]
    },
    {
        id: 'dead-wood',
        name: 'Dead Wood',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Spooky essence or dead (excluding Geeky essence) Trees (Chop)'
            }
        ]
    },
    {
        id: 'diamond',
        name: 'Diamond',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Treasure Cave)'
            }
        ]
    },
    {
        id: 'dinosaur-fossil',
        name: 'Dinosaur Fossil',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (near the dinosaur skeleton)'
            }
        ]
    },
    {
        id: 'dragon',
        name: 'Dragon',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (top left area)'
            }
        ]
    },
    {
        id: 'electric-eel',
        name: 'Electric Eel',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (central pond)'
            }
        ]
    },
    {
        id: 'elephant',
        name: 'Elephant',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (southwest of the central orchard)'
            }
        ]
    },
    {
        id: 'eyeball',
        name: 'Eyeball',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (Spooky Forest Cave)'
            }
        ]
    },
    {
        id: 'fish-bones',
        name: 'Fish Bones',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Fishing (by the East pier at the beach)'
            }
        ]
    },
    {
        id: 'freezer-bunny',
        name: 'Freezer Bunny',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the Stage)'
            }
        ]
    },
    {
        id: 'fruit-pie',
        name: 'Fruit Pie',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the Train Station)'
            }
        ]
    },
    {
        id: 'garnet',
        name: 'Garnet',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (top right area)'
            }
        ]
    },
    {
        id: 'gears',
        name: 'Gears',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Geeky Junkyard Cave)'
            }
        ]
    },
    {
        id: 'ghost',
        name: 'Ghost',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Tress (Ghost Cave)'
            }
        ]
    },
    {
        id: 'gingerbread-man',
        name: 'Gingerbread Man',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (near the waterfall and gate that leads to the Knight Orchard)'
            }
        ]
    },
    {
        id: 'globe',
        name: 'Globe',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (near the entrance to the Geeky Junkyard Cave)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Podium (rarely)'
            }
        ]
    },
    {
        id: 'goby',
        name: 'Goby',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (central pond)'
            }
        ]
    },
    {
        id: 'gold',
        name: 'Gold',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: "Fishing (near the East pier at the beach)"
            }
        ]
    },
    {
        id: 'green-apple',
        name: 'Green Apple',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'happy',
        name: 'Happy',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Source.Socialising,
                activities: "Being Nice to Dr. F, Elmira Clamp, Goth Boy, Vic Vector, Sims who aren't Spooky, or acquaintances"
            },
            {
                locationOrSource: Source.Socialising,
                activities: "Being Mean to Sims like Dolly Dearheart"
            },
            {
                locationOrSource: Source.Socialising,
                activities: "May be dropped after being seen"
            }
        ]
    },
    {
        id: 'heart',
        name: 'Heart',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Treasure Cave)'
            }
        ]
    },
    {
        id: 'hopi-doll',
        name: 'Hopi Doll',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (southwest of the central orchard)'
            }
        ]
    },
    {
        id: 'jack-o-lantern',
        name: "Jack O'Lantern",
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (Spooky Forest Cave)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Pipe Organ (Play)'
            }
        ]
    },
    {
        id: 'jade',
        name: 'Jade',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (top right area)'
            }
        ]
    },
    {
        id: 'kissing-fish',
        name: 'Kissing Fish',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Fishing (by the West pier at the beach)'
            }
        ]
    },
    {
        id: 'kitten',
        name: 'Kitten',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'knight',
        name: 'Knight',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (area accessed by crossing all 3 bridges)'
            }
        ]
    },
    {
        id: 'lemon',
        name: 'Lemon',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (on top of the Cute Prospecting Cave)'
            }
        ]
    },
    {
        id: 'light-wood',
        name: 'Light Wood',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Fun or Tasty essence Trees (Chop)'
            }
        ]
    },
    {
        id: 'lime',
        name: 'Lime',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (on top of the Cute Prospecting Cave)'
            }
        ]
    },
    {
        id: 'magic-carpet',
        name: 'Magic Carpet',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (Fun Prospecting Cave)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Daryl Handsly'
            }
        ]
    },
    {
        id: 'mega-lizard',
        name: 'Mega Lizard',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (near the dinosaur fossil)'
            }
        ]
    },
    {
        id: 'metal',
        name: 'Metal',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Geeky Trees (Melt Down)'
            }
        ]
    },
    {
        id: 'microscope',
        name: 'Microscope',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the Train Station)'
            }
        ]
    },
    {
        id: 'moai',
        name: 'Moai',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (near the dinosaur fossil)'
            }
        ]
    },
    {
        id: 'musical-note',
        name: 'Musical Note',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (Fun Prospecting Cave)'
            }
        ]
    },
    {
        id: 'octopus',
        name: 'Octopus',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Fishing (lake)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Sink'
            }
        ]
    },
    {
        id: 'orange',
        name: 'Orange',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (on top of the ledge)'
            },
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (on top of the Cute Prospecting Cave)'
            }
        ]
    },
    {
        id: 'organic',
        name: 'Organic',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (past the Fun Prospecting Cave)'
            }
        ]
    },
    {
        id: 'pawn',
        name: 'Pawn',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (Chess Cave)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Stage'
            }
        ]
    },
    {
        id: 'pencil',
        name: 'Pencil',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Junkyard, by the entrance)'
            }
        ]
    },
    {
        id: 'penguin',
        name: 'Penguin',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the Train Station)'
            }
        ]
    },
    {
        id: 'pinwheel',
        name: 'Pinwheel',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'plum-blossom',
        name: 'Plum Blossom',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees'
            }
        ]
    },
    {
        id: 'puppet',
        name: 'Puppet',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (pond in the corner)'
            }
        ]
    },
    {
        id: 'puppy',
        name: 'Puppy',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (southwest of the central orchard)'
            }
        ]
    },
    {
        id: 'purple-crayon',
        name: 'Purple Crayon',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Prospecting (near the Train Station)'
            }
        ]
    },
    {
        id: 'rainbow-trout',
        name: 'Rainbow Trout',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Fishing (pond in front of your house)'
            }
        ]
    },
    {
        id: 'raven',
        name: 'Raven',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'red-apple',
        name: 'Red Apple',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Refrigerator (Eat Cookies)'
            }
        ]
    },
    {
        id: 'red-crayon',
        name: 'Red Crayon',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Cute Prospecting Cave)'
            }
        ]
    },
    {
        id: 'robo-fish',
        name: 'Robo Fish',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (pond in the corner)'
            }
        ]
    },
    {
        id: 'robot',
        name: 'Robot',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Geeky Junkyard Cave)'
            }
        ]
    },
    {
        id: 'rocket',
        name: 'Rocket',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Junkyard, near the entrance to the Geeky Junkyard Cave)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Rocket (Launch, occasionally)'
            }
        ]
    },
    {
        id: 'rook',
        name: 'Rook',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees (Chess Cave)'
            }
        ]
    },
    {
        id: 'rose',
        name: 'Rose',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Trees'
            }
        ]
    },
    {
        id: 'rubber-ducky',
        name: 'Rubber Ducky',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (pond)'
            }
        ]
    },
    {
        id: 'sad',
        name: 'Sad',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Mean to Cute, Spooky, or Studious Sims'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Elmire Clamp, Goth Boy, Vic Vector, or an acquaintance'
            },
        ]
    },
    {
        id: 'salmon',
        name: 'Salmon',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (pond in the corner)'
            }
        ]
    },
    {
        id: 'sapphire',
        name: 'Sapphire',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (top right area)'
            }
        ]
    },
    {
        id: 'scary',
        name: 'Scary',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Spooky Sims, Dr. F, or Elmira Clamp'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Doing the "Be Mean" action popping bag around other Sims'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Nearby Sims if a Sim does the "Be Mean" interaction with you'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Sarcophagus (Peek)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Manually waking up while sleeping'
            },
        ]
    },
    {
        id: 'skeleton',
        name: 'Skeleton',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (near the dinosaur fossil)'
            }
        ]
    },
    {
        id: 'snake',
        name: 'Snake',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Fishing (lake)'
            }
        ]
    },
    {
        id: 'soccer-ball',
        name: 'Soccer Ball',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (Fun Prospecting Cave)'
            }
        ]
    },
    {
        id: 'spade',
        name: 'Spade',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Treasure Cave)'
            }
        ]
    },
    {
        id: 'spider',
        name: 'Spider',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (cemetery, near the Ghost Cave)'
            }
        ]
    },
    {
        id: 'spring',
        name: 'Spring',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (Geeky Junkyard Cave)'
            }
        ]
    },
    {
        id: 'star',
        name: 'Star',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Junkyard, near the entrance to the Geeky Junkyard Cave)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Professor Nova'
            }
        ]
    },
    {
        id: 'stone',
        name: 'Stone',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Prospecting (near the Train Station)'
            }
        ]
    },
    {
        id: 'sunflower',
        name: 'Sunflower',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Trees (orchard by the entrance)'
            }
        ]
    },
    {
        id: 'telescope',
        name: 'Telescope',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the Train Station)'
            }
        ]
    },
    {
        id: 'terra-cotta',
        name: 'Terra Cotta',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Forest,
                activities: 'Prospecting (East of the Fun Prospecting Cave)'
            }
        ]
    },
    {
        id: 'textbook',
        name: 'Textbook',
        type: EssenceType.Studious,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'thorn',
        name: 'Thorn',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Trees (garden behind your house)'
            }
        ]
    },
    {
        id: 'tiger',
        name: 'Tiger',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Southwest of the central orchard)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Master Aran'
            }
        ]
    },
    {
        id: 'tim-doll',
        name: 'Tim Doll',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Cute Prospecting Cave)'
            }
        ]
    },
    {
        id: 'tina-doll',
        name: 'Tina Doll',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Cute Prospecting Cave)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Cute Sims'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Joining a Tea Party'
            }
        ]
    },
    {
        id: 'tiny-shark',
        name: 'Tiny Shark',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Fishing (by the West pier at the beach)'
            }
        ]
    },
    {
        id: 'tire',
        name: 'Tire',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Fishing (pond in front of your house)'
            }
        ]
    },
    {
        id: 'topaz',
        name: 'Topaz',
        type: EssenceType.Fun,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (top right area)'
            }
        ]
    },
    {
        id: 'tuna',
        name: 'Tuna',
        type: EssenceType.Tasty,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Fishing (in the stream near the Train Station)'
            }
        ]
    },
    {
        id: 'uber-shiny',
        name: 'Uber Shiny',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the gardens)'
            }
        ]
    },
    {
        id: 'ufo',
        name: 'UFO',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.Garden,
                activities: 'Prospecting (near the Stage)'
            }
        ]
    },
    {
        id: 'video-game',
        name: 'Video Game',
        type: EssenceType.Geeky,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Prospecting (Geeky Prospecting Cave)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Arcade Game (winning a game of Plane Vs. Eye)'
            }
        ]
    },
    {
        id: 'voodoo-doll',
        name: 'Voodoo Doll',
        type: EssenceType.Spooky,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (cemetery, near the Ghost Cave)'
            }
        ]
    },
    {
        id: 'yellow-blossom',
        name: 'Yellow Blossom',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.TownSquare,
                activities: 'Trees (orchard)'
            }
        ]
    },
    {
        id: 'yellow-crayon',
        name: 'Yellow Crayon',
        type: EssenceType.Cute,
        descriptions: [
            {
                locationOrSource: Location.Desert,
                activities: 'Prospecting (Cute Prospecting Cave)'
            }
        ]
    }
];

export const kingdomEssences: Essence[] = [
    {
        id: '8-ball',
        name: '8-Ball',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'DJ Booth (DJ) or Hypnodisc (Watch)'
            }
        ],
    },
    {
        id: 'alien',
        name: 'Alien',
        mana: 7,
        descriptions: [
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Prospecting',
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Rocket (Launch)'
            }
        ]
    },
    {
        id: 'amber',
        name: 'Amber',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CapitalIsland,
                activities: 'Prospecting',
            },
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Prospecting or Clam 2'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Treaure Chest 2'
            }
        ]
    },
    {
        id: 'amethyst',
        name: 'Amethyst',
        mana: 42,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Prospecting, Mining, Treasure Chests 1 and 3, Weeds (pull 4, random)',
            }
        ]
    },
    {
        id: 'angler',
        name: 'Angler',
        mana: 18,
        descriptions: [
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'angry',
        name: 'Angry',
        mana: 6,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Computer (Work), Guiter (Watch), Hot Tub (Relax), Piano (Listen), Pizza Oven (Bellows), TV (Watch), Treadmill (Run).'
            }
        ]
    },
    {
        id: 'apple',
        name: 'Apple',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CapitalIsland,
                activities: 'Trees, Weeds (pull 1)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Picnic Blanket (Eat, random)'
            }
        ]
    },
    {
        id: 'bacon',
        name: 'Bacon',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Prospecting'
            }
        ]
    },
    {
        id: 'banana',
        name: 'Banana',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'bass',
        name: 'Bass',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Fishing',
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'batfish',
        name: 'Batfish',
        mana: 10,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Fishing',
            }
        ]
    },
    {
        id: 'betta',
        name: 'Betta',
        mana: 7,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'bone',
        name: 'Bone',
        mana: 1,
        descriptions: [
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Prospecting'
            }
        ]
    },
    {
        id: 'bronze',
        name: 'Bronze',
        mana: 1,
        descriptions: [
            {
                locationOrSource: Location.CapitalIsland,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Clam 1'
            },
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Clam 2, Treasure Chests 1 and 2'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Mining, Treasure Chest 2'
            }
        ]
    },
    {
        id: 'cake',
        name: 'Cake',
        mana: 5,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Prospecting, Weeds (pull 2)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Picnic Blanket (Eat, random)'
            }
        ]
    },
    {
        id: 'catfish',
        name: 'Catfish',
        mana: 5,
        descriptions: [
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'cherries',
        name: 'Cherries',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'cherry-blossom',
        name: 'Cherry Blossom',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Trees, Weeds (pull 1)'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Trees, Weeds (pull 2)'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'chocolate',
        name: 'Chocolate',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Prospecting, Treasure Chest 3'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Mining, Treasure Chest 4, Weeds (pull 3)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Picnic Blanket (Eat, random)'
            }
        ]
    },
    {
        id: 'coconut',
        name: 'Coconut',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'crab',
        name: 'Crab',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'dead-wood',
        name: 'Dead Wood',
        mana: 5,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Prospecting, Weeds (pull 2)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Campfire (Roast Marshmallows, Warm Hands), Tree Stump (Stomp)'
            }
        ]
    },
    {
        id: 'diamond',
        name: 'Diamond',
        mana: 10,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Clam 2'
            },
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Prospecting, Treasure Chest 2'
            },
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Weeds (pull 4, common)'
            }
        ]
    },
    {
        id: 'electric-eel',
        name: 'Electric Eel',
        mana: 6,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'electrobit',
        name: 'Electrobit',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Mining, Prospecting, Weeds (pull 4)'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Mining, Prospecting'
            },
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Prospecting'
            }
        ]
    },
    {
        id: 'eyeball',
        name: 'Eyeball',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Trees, Treasure Chests 2 and 3, Weeds (pull 1, random)'
            }
        ]
    },
    {
        id: 'ghost',
        name: 'Ghost',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Fishing, Weeds (pull 3)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Sarcophagus (Peek), Summoning Circle (Séance)'
            }
        ]
    },
    {
        id: 'goby',
        name: 'Goby',
        mana: 16,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'gold',
        name: 'Gold',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Weeds (pull 4)'
            },
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Treasure Chest 3'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Treasure Chest 1'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Mining, Treasure Chest 1'
            },
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Treasure Chest 2'
            }
        ]
    },
    {
        id: 'gold-arowana',
        name: 'Gold Arowana',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'happy',
        name: 'Happy',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Centrifuge (Ride), Baththub (Take Bath), Computer (Play Game or Work), Dance Floor (Dance), DJ Booth (Dance), Electro Dance Sphere (Ride), Fountain (Splash), Guitar (Watch), Hot Tub (Relax), Jack-in-the-Box (Open), Mechanical Bull (Ride), Piano (Listen), Podium (Give Speech), Stereo (Dance), Summoning Circle (Séance), or TV (Watch).'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Nice to Sims.'
            }
        ]
    },
    {
        id: 'jade',
        name: 'Jade',
        mana: 6,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Prospecting, Clam 4'
            },
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Prospecting, Weeds (pull 3)'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Prospecting'
            },
        ]
    },
    {
        id: 'jellyfish',
        name: 'Jellyfish',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'kaiserium',
        name: 'Kaiserium',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Treasure Chest 1'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Treasure Chest 5'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Mining'
            }
        ]
    },
    {
        id: 'koi',
        name: 'Koi',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'marlin',
        name: 'Marlin',
        mana: 14,
        descriptions: [
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'metal',
        name: 'Metal',
        mana: 1,
        descriptions: [
            {
                locationOrSource: Location.CapitalIsland,
                activities: 'Mining, Weeds (pull 3)'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Mining'
            }
        ]
    },
    {
        id: 'musical-note',
        name: 'Musical Note',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Trees, Weeds (pull 3)'
            },
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Trees, Weeds (pull 2)'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Mining, Trees'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'DJ Booth (DJ), Guitar (Rock Out), Piano (Play)'
            }
        ]
    },
    {
        id: 'octopus',
        name: 'Octopus',
        mana: 10,
        descriptions: [
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Fishing, Weeds (pull 3)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Sink (Wash Hands)'
            }
        ]
    },
    {
        id: 'onyx',
        name: 'Onyx',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Clam 1, Prospecting'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Prospecting'
            }
        ]
    },
    {
        id: 'orange',
        name: 'Orange',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'organic',
        name: 'Organic',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Prospecting, Treasure Chests 1, 3, and 4, Weeds (pull 3)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Millstone (Mill Flour), Fruit-bearing Plant (Water), Animals (Feed)'
            }
        ]
    },
    {
        id: 'pear',
        name: 'Pear',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'pencil',
        name: 'Pencil',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Prospecting, Weeds (pull 2)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Bookcase (Browse, random)'
            }
        ]
    },
    {
        id: 'pineapple',
        name: 'Pineapple',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Trees, Weeds (pull 1)'
            }
        ]
    },
    {
        id: 'piranha',
        name: 'Piranha',
        mana: 6,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'platinum',
        name: 'Platinum',
        mana: 5,
        descriptions: [
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Treasure Chest'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Treasure Chest'
            },
        ]
    },
    {
        id: 'plecostomus',
        name: 'Plecostomus',
        mana: 10,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'puffer',
        name: 'Puffer',
        mana: 14,
        descriptions: [
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'red-crayon',
        name: 'Red Crayon',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Mining, Weeds (pull 3)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Dresser (Rummage)'
            }
        ]
    },
    {
        id: 'robofish',
        name: 'Robofish',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Fishing, Weeds (pull 3)'
            }
        ]
    },
    {
        id: 'rocket',
        name: 'Rocket',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Trees, Weeds (pull 2)'
            }
        ]
    },
    {
        id: 'sad',
        name: 'Sad',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Computer (Play Game), Electro Dance Sphere (Ride), Mechanical Bull (Ride), Summoning Circle (Séance), TV (Watch), Treadmill (Run)'
            },
            {
                locationOrSource: Source.Socialising,
                activities: 'Being Mean to Sims'
            }
        ]
    },
    {
        id: 'sapphire',
        name: 'Sapphire',
        mana: 5,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Prospecting, Treasure Chest, Weeds (pull 3)'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Treasure Chest'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Treasure Chest, Prospecting'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Treasure Chest'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Treasure Chest, Prospecting'
            },
        ]
    },
    {
        id: 'scary',
        name: 'Scary',
        mana: 6,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Treasure Chests 2, 3, and 5'
,
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Centrifuge (Ride), Computer (Play Game), Guitar (Watch), Jack-in-the-Box (Open), Sarcophagus (Peek), Summoning Circle (Séance)'
            }
        ]
    },
    {
        id: 'sea-turtle',
        name: 'Sea Turtle',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Fishing, Weeds (pull 3)'
            }
        ]
    },
    {
        id: 'sea-urchin',
        name: 'Sea Urchin',
        mana: 7,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Fishing'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'seahorse',
        name: 'Seahorse',
        mana: 7,
        descriptions: [
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Fishing'
            },
        ]
    },
    {
        id: 'silver',
        name: 'Silver',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Clam 4, Treasure Chest'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Treasure Chest'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Mining'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Mining'
            },
        ]
    },
    {
        id: 'simoleon',
        name: 'Simoleon',
        mana: 7,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Treasure Chests 1 and 2, Weeds (pull 4)'
            },
            {
                locationOrSource: Location.CapitalIsland,
                activities: 'Treasure Chest 2'
            },
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'All 3 Treasure Chests'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Clam 1, Prospecting'
            },
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Clams 1, 2, and 4, Treasure Chest 1, Weeds (pull 4)'
            },
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Treasure Chests 1 and 3'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Prospecting, Treasure Chest 4, Weeds (pull 3)'
            },
            {
                locationOrSource: Location.TheRoyalAcademy,
                activities: 'Treasure Chest 1, Prospecting'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Treasure Chest 1'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Couch (Jump On), Computer (Work)'
            }
        ]
    },
    {
        id: 'spring',
        name: 'Spring',
        mana: 1,
        descriptions: [
            {
                locationOrSource: Location.RocketReef,
                activities: 'Mining'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Couch (Jump On), Mechanical Bull (Ride)'
            }
        ]
    },
    {
        id: 'squid',
        name: 'Squid',
        mana: 5,
        descriptions: [
            {
                locationOrSource: Location.Candypalooza,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'star',
        name: 'Star',
        mana: 3,
        descriptions: [
            {
                locationOrSource: Location.TrevorIsland,
                activities: 'Trees, Prospecting, Weeds (pull 1)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Centrifuge (Ride), Hypnodisc (Watch), Rocket (Launch)'
            }
        ]
    },
    {
        id: 'stingray',
        name: 'Stingray',
        mana: 7,
        descriptions: [
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'stone',
        name: 'Stone',
        mana: 2,
        descriptions: [
            {
                locationOrSource: Location.CapitalIsland,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.Cutopia,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.ReneesNaturePreserve,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.RocketReef,
                activities: 'Prospecting'
            },
            {
                locationOrSource: Location.Spookane,
                activities: 'Prospecting'
            }
        ]
    },
    {
        id: 'sunfish',
        name: 'Sunfish',
        mana: 8,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'superkelp',
        name: 'Superkelp',
        mana: 24,
        descriptions: [
            {
                locationOrSource: Source.Interaction,
                activities: 'Bathtub (Take Bath, random)'
            }
        ]
    },
    {
        id: 'tiny-shark',
        name: 'Tiny Shark',
        mana: 9,
        descriptions: [
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Fishing'
            }
        ]
    },
    {
        id: 'tire',
        name: 'Tire',
        mana: 1,
        descriptions: [
            {
                locationOrSource: Location.CowboyJunction,
                activities: 'Weeds (pull 2)'
            }
        ]
    },
    {
        id: 'topaz',
        name: 'Topaz',
        mana: 60,
        descriptions: [
            {
                locationOrSource: Location.Cutopia,
                activities: 'Clam'
            },
            {
                locationOrSource: Location.RewardIsland,
                activities: 'Treasure Chest'
            },
            {
                locationOrSource: Location.TheUnchartedIsle,
                activities: 'Mining (rare), Prospecting, Weeds (pull 4, rare)'
            },
        ]
    },
    {
        id: 'voodoo-doll',
        name: 'Voodoo Doll',
        mana: 4,
        descriptions: [
            {
                locationOrSource: Location.Spookane,
                activities: 'Prospecting, Treasure Chest, Weeds (pull 4)'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Summoning Circle (Séance)'
            }
        ]
    },
    {
        id: 'wood',
        name: 'Wood',
        mana: 1,
        descriptions: [
            {
                locationOrSource: Location.ForestOfTheElves,
                activities: 'Treasure Chest'
            },
            {
                locationOrSource: Source.Interaction,
                activities: 'Trees (Chopping)'
            }
        ]
    },
]