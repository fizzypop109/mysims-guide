import {Essence, EssenceType, Source, Location} from "@/app/data/types";

export const essences: Essence[] = [
    {
        id: '8-ball',
        name: '8-Ball',
        type: EssenceType.Fun,
        locations: [Location.TownSquare],
        sources: [Source.Prospecting, Source.Socialising],
        descriptions: ['Prospecting in the Town Square, near the train station.', 'Being nice to Fun Sims', 'Dropped by Travis if you are friends or best friends.'],
    },
    {
        id: 'action-figure',
        name: 'Action Figure',
        type: EssenceType.Geeky,
        locations: [Location.TownSquare],
        sources: [Source.Prospecting, Source.Socialising],
        descriptions: ['Prospecting in the Town Square, in the Geeky Prospecting Cave.', 'Being nice to Geeky Sims.'],
    },
    {
        id: 'alien',
        name: 'Alien',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the Junkyard, near the entrance to the Junkyard Cave.'],
    },
    {
        id: 'amber',
        name: 'Amber',
        type: EssenceType.Tasty,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top right area of the Desert.'],
    },
    {
        id: 'amethyst',
        name: 'Amethyst',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top right area of the Desert.'],
    },
    {
        id: 'angry',
        name: 'Angry',
        type: EssenceType.Fun,
        sources: [Source.Socialising],
        descriptions: ["Being mean to Commercial, Fun, Geeky, or Tasty Sims.", "Being nice to Vic Vector.", "Being nice to Sims you don't have a good or average relationship with."],
    },
    {
        id: 'bacon',
        name: 'Bacon',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, near the waterfall and Knight Orchard.'],
    },
    {
        id: 'banana',
        name: 'Banana',
        type: EssenceType.Tasty,
        locations: [Location.Garden],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchards in the Garden.'],
    },
    {
        id: 'bat',
        name: 'Bat',
        type: EssenceType.Spooky,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the train station.'],
    },
    {
        id: 'bat-fish',
        name: 'Bat Fish',
        type: EssenceType.Spooky,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the stream near the train station.'],
    },
    {
        id: 'beach-ball',
        name: 'Beach Ball',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Fishing],
        descriptions: ["Fishing by the east pier at the Desert beach."],
    },
    {
        id: 'beta-fish',
        name: 'Beta Fish',
        type: EssenceType.Fun,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the pond.'],
    },
    {
        id: 'black-apple',
        name: 'Black Apple',
        type: EssenceType.Spooky,
        locations: [Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing in the Forest, in the Spooky Forest Cave.'],
    },
    {
        id: 'black-rose',
        name: 'Black Rose',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, near the prospecting field where the jewel essences are found.'],
    },
    {
        id: 'cake',
        name: 'Cake',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Prospecting, Source.Interaction],
        descriptions: ['Prospecting in the Forest, near the waterfall and the gate leading to the Knight Orchard', 'Baking with the stove oven.'],
    },
    {
        id: 'cherry-blossom',
        name: 'Cherry Blossom',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Trees, Source.Interaction],
        descriptions: ['Growing on trees throughout the Forest', 'Performing with a karaoke machine.'],
    },
    {
        id: 'chocolate-cake',
        name: 'Chocolate Cake',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, near the waterfall and the gate leading to the Knight Orchard.'],
    },
    {
        id: 'clown-fish',
        name: 'Clown Fish',
        type: EssenceType.Fun,
        locations: [Location.TownSquare],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Town Square, in the pond in front of your house.'],
    },
    {
        id: 'club',
        name: 'Club',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ["Growing in the Desert, in the Treasure Cave."],
    },
    {
        id: 'compass',
        name: 'Compass',
        type: EssenceType.Studious,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top left area of the Garden.'],
    },
    {
        id: 'crab',
        name: 'Crab',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Fishing, Source.Interaction],
        descriptions: ['Fishing in the Forest, in the lake', 'Making sushi on a counter.'],
    },
    {
        id: 'cube-puzzle',
        name: 'Cube Puzzle',
        type: EssenceType.Geeky,
        locations: [Location.Garden],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Garden.'],
    },
    {
        id: 'dark-wood',
        name: 'Dark Wood',
        type: EssenceType.Studious,
        sources: [Source.Trees],
        descriptions: ['Chopping trees with Cute or Studious essences.'],
    },
    {
        id: 'dead-wood',
        name: 'Dead Wood',
        type: EssenceType.Spooky,
        sources: [Source.Trees],
        descriptions: ['Chopping down Spooky trees, or any dead trees that have been fertilised twice, except for Geeky trees.'],
    },
    {
        id: 'diamond',
        name: 'Diamond',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ["Growing in the Desert, in the Treasure Cave."],
    },
    {
        id: 'dinosaur-fossil',
        name: 'Dinosaur Fossil',
        type: EssenceType.Studious,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, near the huge dinosaur skeleton.'],
    },
    {
        id: 'dragon',
        name: 'Dragon',
        type: EssenceType.Spooky,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top left area of the Garden.'],
    },
    {
        id: 'electric-eel',
        name: 'Electric Eel',
        type: EssenceType.Geeky,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the central pond.'],
    },
    {
        id: 'elephant',
        name: 'Elephant',
        type: EssenceType.Studious,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, southwest of the central orchard.'],
    },
    {
        id: 'eyeball',
        name: 'Eyeball',
        type: EssenceType.Spooky,
        locations: [Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing in the Forest, in the Spooky Forest Cave.'],
    },
    {
        id: 'fish-bones',
        name: 'Fish Bones',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Fishing],
        descriptions: ["Fishing by the east pier at the Desert beach."],
    },
    {
        id: 'freezer-bunny',
        name: 'Freezer Bunny',
        type: EssenceType.Cute,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the stage.'],
    },
    {
        id: 'fruit-pie',
        name: 'Fruit Pie',
        type: EssenceType.Tasty,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the train station.'],
    },
    {
        id: 'garnet',
        name: 'Garnet',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top right area of the Desert.'],
    },
    {
        id: 'gears',
        name: 'Gears',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the Geeky Junkyard Cave.'],
    },
    {
        id: 'ghost',
        name: 'Ghost',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the Ghost Cave.'],
    },
    {
        id: 'gingerbread-man',
        name: 'Gingerbread Man',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, near the waterfall and the gate that leads to the Knight Orchard.'],
    },
    {
        id: 'globe',
        name: 'Globe',
        type: EssenceType.Studious,
        locations: [Location.Desert],
        sources: [Source.Prospecting, Source.Interaction],
        descriptions: ['Prospecting in the Desert, near the entrance to the Geeky Junkyard Cave', 'Rarely, by using the podium.'],
    },
    {
        id: 'goby',
        name: 'Goby',
        type: EssenceType.Fun,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden in the central pond.'],
    },
    {
        id: 'gold',
        name: 'Gold',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Fishing],
        descriptions: ['Fishing from the east pier at the Desert beach.'],
    },
    {
        id: 'green-apple',
        name: 'Green Apple',
        type: EssenceType.Tasty,
        locations: [Location.TownSquare],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Town Square.'],
    },
    {
        id: 'happy',
        name: 'Happy',
        type: EssenceType.Cute,
        sources: [Source.Socialising],
        descriptions: ['Being nice to Sims who are not Spooky, Dr. F, Elmira Clamp, Goth Boy, Vic Vector, or acquaintances', 'Being mean to certain Sims like Dolly Dearheart.', 'May be dropped after being seen by Sims.'],
    },
    {
        id: 'heart',
        name: 'Heart',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the Treasure Cave.'],
    },
    {
        id: 'hopi-doll',
        name: 'Hopi Doll',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the southwest area of the central orchard.'],
    },
    {
        id: 'jack-o-lantern',
        name: "Jack O'Lantern",
        type: EssenceType.Spooky,
        locations: [Location.Forest],
        sources: [Source.Trees, Source.Interaction],
        descriptions: ['Growing in the Forest, in the Spooky Forest Cave,', 'Playing a pipe organ.'],
    },
    {
        id: 'jade',
        name: 'Jade',
        type: EssenceType.Studious,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top right area of the Desert.'],
    },
    {
        id: 'kissing-fish',
        name: 'Kissing Fish',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Fishing],
        descriptions: ['Fishing by the west pier at the Desert beach.'],
    },
    {
        id: 'kitten',
        name: 'Kitten',
        type: EssenceType.Cute,
        locations: [Location.Garden],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Garden.'],
    },
    {
        id: 'knight',
        name: 'Knight',
        type: EssenceType.Studious,
        locations: [Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing deep in the Forest, in an area you can access by crossing all three bridges.'],
    },
    {
        id: 'lemon',
        name: 'Lemon',
        type: EssenceType.Tasty,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, on top of the Cute Prospecting Cave.'],
    },
    {
        id: 'light-wood',
        name: 'Light Wood',
        type: EssenceType.Studious,
        sources: [Source.Trees],
        descriptions: ['Chopping trees with Fun or Tasty essences.'],
    },
    {
        id: 'lime',
        name: 'Lime',
        type: EssenceType.Tasty,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, on top of the Cute Prospecting Cave.'],
    },
    {
        id: 'magic-carpet',
        name: 'Magic Carpet',
        type: EssenceType.Fun,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, in the Fun Prospecting Cave.', 'Being nice to Daryl Handsly.'],
    },
    {
        id: 'mega-lizard',
        name: 'Mega Lizard',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, near the huge dinosaur fossil.'],
    },
    {
        id: 'metal',
        name: 'Metal',
        type: EssenceType.Geeky,
        sources: [Source.Trees],
        descriptions: ['Melting down Geeky trees.'],
    },
    {
        id: 'microscope',
        name: 'Microscope',
        type: EssenceType.Studious,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the train station.'],
    },
    {
        id: 'moai',
        name: 'Moai',
        type: EssenceType.Studious,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, near the huge dinosaur fossil.'],
    },
    {
        id: 'musical-note',
        name: 'Musical Note',
        type: EssenceType.Fun,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, in the Fun Prospecting Cave.'],
    },
    {
        id: 'octopus',
        name: 'Octopus',
        type: EssenceType.Tasty,
        locations: [Location.Forest],
        sources: [Source.Fishing, Source.Interaction],
        descriptions: ['Fishing in the Forest lake.', 'Using the sink.'],
    },
    {
        id: 'orange',
        name: 'Orange',
        type: EssenceType.Tasty,
        locations: [Location.Desert, Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing on top of the ledge in the Forest.', 'Growing in the Desert, above the Cute Prospecting Cave.'],
    },
    {
        id: 'organic',
        name: 'Organic',
        type: EssenceType.Studious,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, just past the Fun Prospecting Cave and the house lot next to it.'],
    },
    {
        id: 'pawn',
        name: 'Pawn',
        type: EssenceType.Studious,
        locations: [Location.Forest],
        sources: [Source.Trees, Source.Interaction],
        descriptions: ['Growing in the Forest, in the Chess Cave.', 'Using a stage.'],
    },
    {
        id: 'pencil',
        name: 'Pencil',
        type: EssenceType.Studious,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the Junkyard, right by the entrance.'],
    },
    {
        id: 'penguin',
        name: 'Penguin',
        type: EssenceType.Cute,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the train station.'],
    },
    {
        id: 'pinwheel',
        name: 'Pinwheel',
        type: EssenceType.Fun,
        locations: [Location.Garden],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Garden.'],
    },
    {
        id: 'plum-blossom',
        name: 'Plum Blossom',
        type: EssenceType.Cute,
        locations: [Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing in the Forest.'],
    },
    {
        id: 'puppet',
        name: 'Puppet',
        type: EssenceType.Cute,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the pond in the corner.'],
    },
    {
        id: 'puppy',
        name: 'Puppy',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the south west area of the central orchard.'],
    },
    {
        id: 'purple-crayon',
        name: 'Purple Crayon',
        type: EssenceType.Cute,
        locations: [Location.TownSquare],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Town Square, near the train station.'],
    },
    {
        id: 'rainbow-trout',
        name: 'Rainbow Trout',
        type: EssenceType.Tasty,
        locations: [Location.TownSquare],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Town Square, in the pond in front of your house.'],
    },
    {
        id: 'raven',
        name: 'Raven',
        type: EssenceType.Spooky,
        locations: [Location.Garden],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Garden.'],
    },
    {
        id: 'red-apple',
        name: 'Red Apple',
        type: EssenceType.Tasty,
        locations: [Location.TownSquare],
        sources: [Source.Trees, Source.Interaction],
        descriptions: ['Growing in the garden.', 'Eating cookies in a refrigerator.'],
    },
    {
        id: 'red-crayon',
        name: 'Red Crayon',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the Cute Prospecting Cave.'],
    },
    {
        id: 'robo-fish',
        name: 'Robo Fish',
        type: EssenceType.Geeky,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the pond in the corner.'],
    },
    {
        id: 'robot',
        name: 'Robot',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the Geeky Junkyard Cave.'],
    },
    {
        id: 'rocket',
        name: 'Rocket',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the Junkyard near the entrance to the Geeky Junkyard Cave.', 'Occasionally, from a rocket launch.'],
    },
    {
        id: 'rook',
        name: 'Rook',
        type: EssenceType.Studious,
        locations: [Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing in the Forest, in the Chess Cave.'],
    },
    {
        id: 'rose',
        name: 'Rose',
        type: EssenceType.Cute,
        locations: [Location.Forest],
        sources: [Source.Trees],
        descriptions: ['Growing in the Forest.'],
    },
    {
        id: 'rubber-ducky',
        name: 'Rubber Ducky',
        type: EssenceType.Fun,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the pond.'],
    },
    {
        id: 'sad',
        name: 'Sad',
        type: EssenceType.Spooky,
        sources: [Source.Socialising],
        descriptions: ['Being mean to Cute, Spooky, and Studious Sims.', 'Being nice to Elmire Clamp, Goth Boy, Vic Vector, or an acquaintance.'],
    },
    {
        id: 'salmon',
        name: 'Salmon',
        type: EssenceType.Tasty,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the pond in the corner.'],
    },
    {
        id: 'sapphire',
        name: 'Sapphire',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the top right area.'],
    },
    {
        id: 'scary',
        name: 'Scary',
        type: EssenceType.Spooky,
        sources: [Source.Socialising, Source.Interaction],
        descriptions: ['Being nice to Spooky Sims, Dr. F, or Elmira Clamp.', 'Peeking in a sarcophagus.', 'Doing the "Be Mean" action popping bag around other Sims.', 'Nearby Sims if a Sim does the "Be Mean" interaction with you.', 'Manually waking up while sleeping.'],
    },
    {
        id: 'skeleton',
        name: 'Skeleton',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, near the huge dinosaur fossil.'],
    },
    {
        id: 'snake',
        name: 'Snake',
        type: EssenceType.Geeky,
        locations: [Location.Forest],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Forest lake.'],
    },
    {
        id: 'soccer-ball',
        name: 'Soccer Ball',
        type: EssenceType.Fun,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, in the Fun Prospecting Cave.'],
    },
    {
        id: 'spade',
        name: 'Spade',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the Treasure Cave.'],
    },
    {
        id: 'spider',
        name: 'Spider',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert cemetery, near the Ghost Cave.'],
    },
    {
        id: 'spring',
        name: 'Spring',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the Geeky Junkyard Cave.'],
    },
    {
        id: 'star',
        name: 'Star',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Prospecting, Source.Socialising],
        descriptions: ['Prospecting in the Desert, the Junkyard, near the entrance to the Geeky Junkyard Cave.', 'Being nice to Professor Nova.'],
    },
    {
        id: 'stone',
        name: 'Stone',
        type: EssenceType.Studious,
        locations: [Location.TownSquare],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Town Square, near the train station.'],
    },
    {
        id: 'sunflower',
        name: 'Sunflower',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Trees],
        descriptions: ['Growing in the Desert, in the orchard by the entrance.'],
    },
    {
        id: 'telescope',
        name: 'Telescope',
        type: EssenceType.Studious,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the train station.'],
    },
    {
        id: 'terra-cotta',
        name: 'Terra Cotta',
        type: EssenceType.Studious,
        locations: [Location.Forest],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Forest, to the east of the Fun Prospecting Cave.'],
    },
    {
        id: 'textbook',
        name: 'Textbook',
        type: EssenceType.Studious,
        locations: [Location.Garden],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Garden.'],
    },
    {
        id: 'thorn',
        name: 'Thorn',
        type: EssenceType.Spooky,
        locations: [Location.TownSquare],
        sources: [Source.Trees],
        descriptions: ['Growing in the Town Square, in the garden behind your house.'],
    },
    {
        id: 'tiger',
        name: 'Tiger',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Prospecting, Source.Socialising],
        descriptions: ['Prospecting in the Desert, in the south west area of the central orchard.', 'Being nice to Master Aran.'],
    },
    {
        id: 'tim-doll',
        name: 'Tim Doll',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the Cute Prospecting Cave.'],
    },
    {
        id: 'tina-doll',
        name: 'Tina Doll',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Prospecting, Source.Socialising],
        descriptions: ['Prospecting in the Desert, in the Cute Prospecting Cave.', 'Being nice to Cute Sims.', 'Joining a tea party.'],
    },
    {
        id: 'tiny-shark',
        name: 'Tiny Shark',
        type: EssenceType.Geeky,
        locations: [Location.Desert],
        sources: [Source.Fishing],
        descriptions: ['Fishing by the west pier at the Desert beach.'],
    },
    {
        id: 'tire',
        name: 'Tire',
        type: EssenceType.Geeky,
        locations: [Location.TownSquare],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Town Square, in the pond in front of your house.'],
    },
    {
        id: 'topaz',
        name: 'Topaz',
        type: EssenceType.Fun,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the top right area of the Desert.'],
    },
    {
        id: 'tuna',
        name: 'Tuna',
        type: EssenceType.Tasty,
        locations: [Location.Garden],
        sources: [Source.Fishing],
        descriptions: ['Fishing in the Garden, in the stream near the train station.'],
    },
    {
        id: 'uber-shiny',
        name: 'Uber Shiny',
        type: EssenceType.Geeky,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the gardens.'],
    },
    {
        id: 'ufo',
        name: 'UFO',
        type: EssenceType.Geeky,
        locations: [Location.Garden],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Garden, near the stage.'],
    },
    {
        id: 'video-game',
        name: 'Video Game',
        type: EssenceType.Geeky,
        locations: [Location.TownSquare],
        sources: [Source.Prospecting, Source.Interaction],
        descriptions: ['Prospecting in the Town Square, in the Geeky Prospecting Cave.', 'Winning a game of Plane Vs. Eye.'],
    },
    {
        id: 'voodoo-doll',
        name: 'Voodoo Doll',
        type: EssenceType.Spooky,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert cemetery, near the Ghost Cave.'],
    },
    {
        id: 'yellow-blossom',
        name: 'Yellow Blossom',
        type: EssenceType.Cute,
        locations: [Location.TownSquare],
        sources: [Source.Trees],
        descriptions: ['Growing in the orchard in the Town Square.'],
    },
    {
        id: 'yellow-crayon',
        name: 'Yellow Crayon',
        type: EssenceType.Cute,
        locations: [Location.Desert],
        sources: [Source.Prospecting],
        descriptions: ['Prospecting in the Desert, in the Cute Prospecting Cave.'],
    }
];