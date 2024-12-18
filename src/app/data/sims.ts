import {EssenceType, Sim, SimType, Location} from "@/app/data/types";

export const mySimsSims: Sim[] = [
    {
        id: 'rosalyn',
        name: 'Rosalyn P. Marshall',
        nickname: 'Rosalyn',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Geeky,
        starLevel: 0,
        residenceName: 'Town Hall',
        tasks: [
            {
                items: [
                    {
                        item: 'Podium',
                        essences: [
                            {
                                essenceId: 'red-apple',
                                amount: 4
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'poppy',
        name: 'Poppy',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Spooky,
        starLevel: 0,
        residenceName: "Poppy's Flower Shop",
        tasks: [
            {
                items: [
                    {
                        item: 'Flower Stand',
                        essences: [
                            {
                                essenceId: 'happy',
                                amount: 2
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bed',
                        essences: [
                            {
                                essenceId: 'yellow-blossom',
                                amount: 2
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Flower Stand',
                        essences: [
                            {
                                essenceId: 'yellow-blossom',
                                amount: 8
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'buddy',
        name: 'Buddy',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Spooky,
        starLevel: 0,
        residenceName: 'The [Town Name] Hotel'
    },
    {
        id: 'violet',
        name: 'Violet Nightshade',
        nickname: 'Violet',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Cute,
        starLevel: 0,
        residenceName: "Violet's House"
    },
    {
        id: 'patrick',
        name: 'Patrick Rhino',
        nickname: 'Patrick',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Geeky,
        starLevel: 0,
        residenceName: "Patrick's House"
    },
    {
        id: 'samurai-bob',
        name: 'Samurai Bob',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Cute,
        starLevel: 0,
        residenceName: "Samurai Bob's House"
    },
    {
        id: 'hopper',
        name: 'Hopper',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Tasty,
        starLevel: 0,
        residenceName: "Hopper's Pad"
    },
    {
        id: 'star',
        name: 'Star',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Tasty,
        starLevel: 0,
        residenceName: "Star's Secret Hideout"
    },
    {
        id: 'mel',
        name: 'Mel',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Tasty,
        starLevel: 0,
        residenceName: "Mel the Mummy's Crypt"
    },
    {
        id: 'chancellor-ikara',
        name: 'Chancellor Ikara',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Fun,
        starLevel: 0,
        residenceName: "Chancellor Ikara's House"
    },
    {
        id: 'daryl-handsly',
        name: 'Daryl Handsly',
        nickname: 'Daryl',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Studious,
        starLevel: 0,
        residenceName: "The Amazing Daryl's House"
    },
    {
        id: 'cassandra',
        name: 'Cassandra',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Fun,
        starLevel: 0,
        residenceName: "N/A"
    },
    {
        id: 'gino',
        name: 'Chef Gino Delicioso',
        nickname: 'Gino',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Geeky,
        starLevel: 1,
        residenceName: "Gino's Restaurant",
        tasks: [
            {
                items: [
                    {
                        item: 'Pizza Oven',
                        essences: [
                            {
                                essenceId: 'red-apple',
                                amount: 8
                            },
                            {
                                essenceId: 'stone',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Dining Table',
                        essences: [
                            {
                                essenceId: 'red-apple',
                                amount: 4
                            },
                            {
                                essenceId: 'green-apple',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'green-apple',
                                amount: 5
                            }
                        ]
                    },
                ]
            },
            {
                items: [
                    {
                        item: 'Sink',
                        essences: [
                            {
                                essenceId: 'stone',
                                amount: 3
                            },
                            {
                                essenceId: 'red-apple',
                                amount: 5
                            }
                        ]
                    },
                    {
                        item: 'Refrigerator',
                        essences: [
                            {
                                essenceId: 'stone',
                                amount: 2
                            },
                            {
                                essenceId: 'red-apple',
                                amount: 5
                            }
                        ]
                    },
                    {
                        item: 'Stove',
                        essences: [
                            {
                                essenceId: 'stone',
                                amount: 3
                            },
                            {
                                essenceId: 'red-apple',
                                amount: 5
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'candy',
        name: 'DJ Candy Supergroove',
        nickname: 'Candy',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Tasty,
        starLevel: 1,
        residenceName: "Club Candy",
        tasks: [
            {
                items: [
                    {
                        item: 'Stereo',
                        essences: [
                            {
                                essenceId: 'happy',
                                amount: 9
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Couch',
                        essences: [
                            {
                                essenceId: '8-ball',
                                amount: 2
                            },
                            {
                                essenceId: 'clown-fish',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Coffee Table',
                        essences: [
                            {
                                essenceId: '8-ball',
                                amount: 1
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Turntable',
                        essences: [
                            {
                                essenceId: '8-ball',
                                amount: 6
                            },
                            {
                                essenceId: 'clown-fish',
                                amount: 14
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'vincent',
        name: 'Sir Vincent Skullfinder',
        nickname: 'Vincent',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Cute,
        starLevel: 1,
        residenceName: "The Skullfinder Museum",
        tasks: [
            {
                items: [
                    {
                        item: 'Sculpture',
                        essences: [
                            {
                                essenceId: 'dead-wood',
                                amount: 8
                            }
                        ]
                    },
                    {
                        item: 'Sculpture',
                        essences: [
                            {
                                essenceId: 'stone',
                                amount: 8
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Desk',
                        essences: [
                            {
                                essenceId: 'dead-wood',
                                amount: 7
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'dead-wood',
                                amount: 5
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Sarcophagus',
                        essences: [
                            {
                                essenceId: 'scary',
                                amount: 20
                            },
                            {
                                essenceId: 'stone',
                                amount: 10
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'vic',
        name: 'Vic Vector',
        nickname: 'Vic',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Cute,
        starLevel: 2,
        residenceName: "Vic's Awesome Arcade",
        tasks: [
            {
                items: [
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'video-game',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Couch',
                        essences: [
                            {
                                essenceId: 'action-figure',
                                amount: 10
                            }
                        ]
                    },
                    {
                        item: 'Television',
                        essences: [
                            {
                                essenceId: 'action-figure',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Refrigerator',
                        essences: [
                            {
                                essenceId: 'bacon',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'tire',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'octopus',
                                amount: 6
                            },
                            {
                                essenceId: 'crab',
                                amount: 14
                            }
                        ]
                    },
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'snake',
                                amount: 16
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'roxie',
        name: 'Roxie Road',
        nickname: 'Roxie',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Studious,
        starLevel: 2,
        residenceName: "Roxie's Ice Cream Shoppe",
        tasks: [
            {
                items: [
                    {
                        item: 'Ice Cream Freezer',
                        essences: [
                            {
                                essenceId: 'happy',
                                amount: 14
                            },
                            {
                                essenceId: 'gingerbread-man',
                                amount: 12
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Refrigerator',
                        essences: [
                            {
                                essenceId: 'happy',
                                amount: 10
                            },
                            {
                                essenceId: 'gingerbread-man',
                                amount: 10
                            }
                        ]
                    },
                    {
                        item: 'Sink',
                        essences: [
                            {
                                essenceId: 'happy',
                                amount: 10
                            },
                            {
                                essenceId: 'chocolate-cake',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Table',
                        essences: [
                            {
                                essenceId: 'cherry-blossom',
                                amount: 14
                            },
                            {
                                essenceId: 'cake',
                                amount: 10
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'cherry-blossom',
                                amount: 16
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bathtub',
                        essences: [
                            {
                                essenceId: 'cherry-blossom',
                                amount: 20
                            },
                            {
                                essenceId: 'cake',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Sink',
                        essences: [
                            {
                                essenceId: 'cherry-blossom',
                                amount: 20
                            },
                            {
                                essenceId: 'cake',
                                amount: 10
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'travis',
        name: 'Travis',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Cute,
        starLevel: 2,
        residenceName: "Travis's House"
    },
    {
        id: 'nicole',
        name: 'Ms. Nicole Vogue',
        nickname: 'Ms. Nicole',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Tasty,
        starLevel: 2,
        residenceName: "Ms. Nicole's Boutique",
        tasks: [
            {
                items: [
                    {
                        item: 'Bed',
                        essences: [
                            {
                                essenceId: 'rose',
                                amount: 8
                            },
                            {
                                essenceId: 'purple-crayon',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Mirror',
                        essences: [
                            {
                                essenceId: 'plum-blossom',
                                amount: 14
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Dresser',
                        essences: [
                            {
                                essenceId: 'dark-wood',
                                amount: 10
                            },
                            {
                                essenceId: 'rose',
                                amount: 10
                            }
                        ]
                    },
                    {
                        item: 'Dresser',
                        essences: [
                            {
                                essenceId: 'light-wood',
                                amount: 10
                            },
                            {
                                essenceId: 'plum-blossom',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Changing Booth',
                        essences: [
                            {
                                essenceId: 'rose',
                                amount: 20
                            },
                            {
                                essenceId: 'plum-blossom',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'elmira',
        name: 'Elmira Clamp',
        nickname: 'Elmira',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Fun,
        starLevel: 2,
        residenceName: "Elmira's Library",
        tasks: [
            {
                items: [
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'dark-wood',
                                amount: 12
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Desk',
                        essences: [
                            {
                                essenceId: 'terra-cotta',
                                amount: 4
                            },
                            {
                                essenceId: 'dark-wood',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'dark-wood',
                                amount: 9
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Small Television',
                        essences: [
                            {
                                essenceId: 'dark-wood',
                                amount: 5
                            }
                        ]
                    },
                    {
                        item: 'Couch',
                        essences: [
                            {
                                essenceId: 'dark-wood',
                                amount: 16
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'scary',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'happy',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'rose',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'rhonda',
        name: 'Rhonda',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Cute,
        starLevel: 2,
        residenceName: "Rhonda's House"
    },
    {
        id: 'ray',
        name: 'Ray',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Fun,
        starLevel: 2,
        residenceName: "Ray's House"
    },
    {
        id: 'clara',
        name: 'Clara Belle',
        nickname: 'Clara',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Spooky,
        starLevel: 2,
        residenceName: "Clara's House"
    },
    {
        id: 'maria',
        name: 'Maria',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Geeky,
        starLevel: 2,
        residenceName: "Maria's House"
    },
    {
        id: 'gordon',
        name: 'Gordon',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Tasty,
        starLevel: 2,
        residenceName: "Gordon's House"
    },
    {
        id: 'roger',
        name: 'Roger',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Tasty,
        starLevel: 2,
        residenceName: "Roger's House"
    },
    {
        id: 'shirley',
        name: 'Shirley',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Spooky,
        starLevel: 3,
        residenceName: "Shirley's Beauty Salon",
        tasks: [
            {
                items: [
                    {
                        item: 'Salon Chair',
                        essences: [
                            {
                                essenceId: 'red-crayon',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Flower Stand',
                        essences: [
                            {
                                essenceId: 'yellow-blossom',
                                amount: 20
                            },
                            {
                                essenceId: 'rose',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Stove',
                        essences: [
                            {
                                essenceId: 'lime',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Refrigerator',
                        essences: [
                            {
                                essenceId: 'orange',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Counter',
                        essences: [
                            {
                                essenceId: 'lemon',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Salon Chair',
                        essences: [
                            {
                                essenceId: 'gold',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Salon Chair',
                        essences: [
                            {
                                essenceId: 'kissing-fish',
                                amount: 40
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'goth-boy',
        name: 'Goth Boy',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Fun,
        starLevel: 3,
        residenceName: "Goth Boy's House of Darkness",
        tasks: [
            {
                items: [
                    {
                        item: 'Couch',
                        essences: [
                            {
                                essenceId: 'sad',
                                amount: 16
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'sad',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bed',
                        essences: [
                            {
                                essenceId: 'thorn',
                                amount: 20
                            },
                            {
                                essenceId: 'spider',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bathtub',
                        essences: [
                            {
                                essenceId: 'black-rose',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Organ',
                        essences: [
                            {
                                essenceId: 'jack-o-lantern',
                                amount: 30
                            },
                            {
                                essenceId: 'thorn',
                                amount: 30
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'dolly',
        name: 'Dolly Dearheart',
        nickname: 'Dolly',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Spooky,
        starLevel: 3,
        residenceName: "Dolly's Costumes",
        tasks: [
            {
                items: [
                    {
                        item: 'Costume Chest',
                        essences: [
                            {
                                essenceId: 'sunflower',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Mirror',
                        essences: [
                            {
                                essenceId: 'purple-crayon',
                                amount: 15
                            },
                            {
                                essenceId: 'sunflower',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bed',
                        essences: [
                            {
                                essenceId: 'yellow-crayon',
                                amount: 14
                            },
                            {
                                essenceId: 'red-crayon',
                                amount: 14
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Dining Table',
                        essences: [
                            {
                                essenceId: 'puppy',
                                amount: 15
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'tim-doll',
                                amount: 15
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'tina-doll',
                                amount: 15
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'aran',
        name: 'Master Aran',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Cute,
        starLevel: 3,
        residenceName: "Master Aran's School for Martial Artistry",
        tasks: [
            {
                items: [
                    {
                        item: 'Training Dummy',
                        essences: [
                            {
                                essenceId: 'tiger',
                                amount: 12
                            },
                            {
                                essenceId: 'elephant',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Training Dummy',
                        essences: [
                            {
                                essenceId: 'angry',
                                amount: 15
                            },
                            {
                                essenceId: 'spider',
                                amount: 15
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Training Dummy',
                        essences: [
                            {
                                essenceId: 'octopus',
                                amount: 15
                            },
                            {
                                essenceId: 'crab',
                                amount: 15
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Training Dummy',
                        essences: [
                            {
                                essenceId: 'mega-lizard',
                                amount: 15
                            },
                            {
                                essenceId: 'tiny-shark',
                                amount: 30
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'hisao',
        name: 'Chef Hisao Watanabe',
        nickname: 'Chef Hisao',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Cute,
        starLevel: 3,
        residenceName: "Watanabe Sushi",
        tasks: [
            {
                items: [
                    {
                        item: 'Sink',
                        essences: [
                            {
                                essenceId: 'rainbow-trout',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bathtub',
                        essences: [
                            {
                                essenceId: 'crab',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Hot Tub',
                        essences: [
                            {
                                essenceId: 'octopus',
                                amount: 20
                            },
                            {
                                essenceId: 'rainbow-trout',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Karaoke Machine',
                        essences: [
                            {
                                essenceId: 'stone',
                                amount: 10
                            },
                            {
                                essenceId: 'organic',
                                amount: 20
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'sandra',
        name: 'Sandra',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Geeky,
        starLevel: 3,
        residenceName: "Sandra's House"
    },
    {
        id: 'matt',
        name: 'Matt',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Tasty,
        starLevel: 3,
        residenceName: "Matt's House"
    },
    {
        id: 'jenny',
        name: 'Jenny',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Spooky,
        starLevel: 3,
        residenceName: "Jenny's House"
    },
    {
        id: 'stephen',
        name: 'Stephen Albright',
        nickname: 'Stephen',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Cute,
        starLevel: 3,
        residenceName: "Stephen's House"
    },
    {
        id: 'raven',
        name: 'Raven Wright',
        nickname: 'Raven',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Geeky,
        starLevel: 3,
        residenceName: "Raven's Perch"
    },
    {
        id: 'bean',
        name: 'Bean Bradley',
        nickname: 'Bean',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Studious,
        starLevel: 3,
        residenceName: "Bean's House"
    },
    {
        id: 'natalia',
        name: 'Natalia Roshmanov',
        nickname: 'Natalia',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Fun,
        starLevel: 3,
        residenceName: "S.I.M. Headquarters",
        tasks: [
            {
                items: [
                    {
                        item: 'Desk',
                        essences: [
                            {
                                essenceId: 'terra-cotta',
                                amount: 6
                            },
                            {
                                essenceId: 'moai',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'terra-cotta',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Sculpture',
                        essences: [
                            {
                                essenceId: 'elephant',
                                amount: 6
                            },
                            {
                                essenceId: 'mega-lizard',
                                amount: 4
                            }
                        ]
                    },
                ]
            },
            {
                items: [
                    {
                        item: 'Super Computer',
                        essences: [
                            {
                                essenceId: 'textbook',
                                amount: 8
                            },
                            {
                                essenceId: 'video-game',
                                amount: 8
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id: 'tad',
        name: 'Tad "Flipper" McCaffrey',
        nickname: 'Tad',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Spooky,
        starLevel: 3,
        residenceName: "Flipper's Pool House",
        tasks: [
            {
                items: [
                    {
                        item: 'Sculpture',
                        essences: [
                            {
                                essenceId: 'soccer-ball',
                                amount: 4
                            },
                            {
                                essenceId: 'puppy',
                                amount: 2
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Sink',
                        essences: [
                            {
                                essenceId: 'tiger',
                                amount: 4
                            },
                            {
                                essenceId: 'sunflower',
                                amount: 2
                            }
                        ]
                    },
                    {
                        item: 'Bathtub',
                        essences: [
                            {
                                essenceId: 'tiger',
                                amount: 4
                            },
                            {
                                essenceId: 'sunflower',
                                amount: 8
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Pool',
                        essences: [
                            {
                                essenceId: 'pinwheel',
                                amount: 16
                            },
                            {
                                essenceId: 'club',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'wendalyn',
        name: 'Wendalyn',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Geeky,
        starLevel: 3,
        residenceName: "Cauldron Creations",
        tasks: [
            {
                items: [
                    {
                        item: 'Stove',
                        essences: [
                            {
                                essenceId: 'ghost',
                                amount: 6
                            },
                            {
                                essenceId: 'gingerbread-man',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Refrigerator',
                        essences: [
                            {
                                essenceId: 'ghost',
                                amount: 4
                            },
                            {
                                essenceId: 'eyeball',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Shelf',
                        essences: [
                            {
                                essenceId: 'jack-o-lantern',
                                amount: 3
                            },
                            {
                                essenceId: 'spider',
                                amount: 2
                            }
                        ]
                    },
                    {
                        item: 'Sarcophagus',
                        essences: [
                            {
                                essenceId: 'jack-o-lantern',
                                amount: 8
                            },
                            {
                                essenceId: 'bacon',
                                amount: 8
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Magic Cauldron',
                        essences: [
                            {
                                essenceId: 'raven',
                                amount: 8
                            },
                            {
                                essenceId: 'black-rose',
                                amount: 4
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'ginny',
        name: "Cap'n Ginny",
        nickname: 'Ginny',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Studious,
        starLevel: 4,
        residenceName: "Cap'n Ginny's",
        tasks: [
            {
                items: [
                    {
                        item: 'Jukebox',
                        essences: [
                            {
                                essenceId: 'angry',
                                amount: 16
                            },
                            {
                                essenceId: 'musical-note',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Dresser',
                        essences: [
                            {
                                essenceId: 'heart',
                                amount: 20
                            },
                            {
                                essenceId: 'spade',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Costume Chest',
                        essences: [
                            {
                                essenceId: 'diamond',
                                amount: 15
                            },
                            {
                                essenceId: 'club',
                                amount: 15
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Hot Tub',
                        essences: [
                            {
                                essenceId: 'beach-ball',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Pirate Ship',
                        essences: [
                            {
                                essenceId: 'magic-carpet',
                                amount: 20
                            },
                            {
                                essenceId: 'angry',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'zoe',
        name: 'Madame Zoe',
        nickname: 'Zoe',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Tasty,
        starLevel: 4,
        residenceName: "Madame Zoe's Fortunes",
        tasks: [
            {
                items: [
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'snake',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Table',
                        essences: [
                            {
                                essenceId: 'voodoo-doll',
                                amount: 10
                            },
                            {
                                essenceId: 'eyeball',
                                amount: 5
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Mirror',
                        essences: [
                            {
                                essenceId: 'fish-bone',
                                amount: 14
                            },
                            {
                                essenceId: 'skeleton',
                                amount: 16
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Sarcophagus',
                        essences: [
                            {
                                essenceId: 'ghost',
                                amount: 20
                            },
                            {
                                essenceId: 'black-apple',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Fortune Crystal',
                        essences: [
                            {
                                essenceId: 'eyeball',
                                amount: 30
                            },
                            {
                                essenceId: 'ghost',
                                amount: 25
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'trevor',
        name: 'Trevor Verily',
        nickname: 'Trevor',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Geeky,
        starLevel: 4,
        residenceName: "Trevor's Theatre",
        tasks: [
            {
                items: [
                    {
                        item: 'Changing Booth',
                        essences: [
                            {
                                essenceId: 'pawn',
                                amount: 20
                            },
                            {
                                essenceId: 'knight',
                                amount: 10
                            }
                        ]
                    },
                    {
                        item: 'Costume Chest',
                        essences: [
                            {
                                essenceId: 'rook',
                                amount: 30
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Salon Chair',
                        essences: [
                            {
                                essenceId: 'hopi-doll',
                                amount: 30
                            },
                            {
                                essenceId: 'moai',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Counter',
                        essences: [
                            {
                                essenceId: 'pawn',
                                amount: 15
                            },
                            {
                                essenceId: 'rook',
                                amount: 15
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Theatre Stage',
                        essences: [
                            {
                                essenceId: 'globe',
                                amount: 30
                            },
                            {
                                essenceId: 'dinosaur-fossil',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'dr-f',
        name: 'Dr. F',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Cute,
        starLevel: 4,
        residenceName: "Dr. F's Lab of Wonders",
        tasks: [
            {
                items: [
                    {
                        item: 'Stereo',
                        essences: [
                            {
                                essenceId: 'spring',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Stove',
                        essences: [
                            {
                                essenceId: 'gears',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Turntable',
                        essences: [
                            {
                                essenceId: 'robot',
                                amount: 30
                            }
                        ]
                    },
                    {
                        item: 'Refrigerator',
                        essences: [
                            {
                                essenceId: 'tire',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Karaoke Machine',
                        essences: [
                            {
                                essenceId: 'soccer-ball',
                                amount: 20
                            }
                        ]
                    },
                    {
                        item: 'Toilet',
                        essences: [
                            {
                                essenceId: 'tiny-shark',
                                amount: 15
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Tesla Coil/Zap-O-Tron',
                        essences: [
                            {
                                essenceId: 'gear',
                                amount: 25
                            },
                            {
                                essenceId: 'robot',
                                amount: 25
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'nova',
        name: 'Professor Nova',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Fun,
        starLevel: 4,
        residenceName: "Professor Nova's Observatory",
        tasks: [
            {
                items: [
                    {
                        item: 'Telescope',
                        essences: [
                            {
                                essenceId: 'star',
                                amount: 20
                            },
                            {
                                essenceId: 'metal',
                                amount: 25
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'pencil',
                                amount: 20
                            },
                            {
                                essenceId: 'light-wood',
                                amount: 15
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Couch',
                        essences: [
                            {
                                essenceId: 'star',
                                amount: 10
                            },
                            {
                                essenceId: 'metal',
                                amount: 10
                            }
                        ]
                    },
                    {
                        item: 'Small Television',
                        essences: [
                            {
                                essenceId: 'alien',
                                amount: 10
                            },
                            {
                                essenceId: 'metal',
                                amount: 10
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'alien',
                                amount: 15
                            },
                            {
                                essenceId: 'rocket',
                                amount: 20
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        id: 'annie',
        name: 'Annie Radd',
        nickname: 'Annie',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Studious,
        starLevel: 4,
        residenceName: "Annie's House"
    },
    {
        id: 'odin',
        name: 'Odin Revolution',
        nickname: 'Odin',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Studious,
        starLevel: 4,
        residenceName: "Odin's Realm"
    },
    {
        id: 'liberty',
        name: 'Liberty',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Studious,
        starLevel: 4,
        residenceName: "Liberty's House"
    },
    {
        id: 'pinky',
        name: 'Pinky',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Studious,
        starLevel: 4,
        residenceName: "Pinky's House"
    },
    {
        id: 'jeremy',
        name: 'Jeremy Snoars',
        nickname: 'Jeremy',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Fun,
        starLevel: 4,
        residenceName: "Jeremy's Crib"
    },
    {
        id: 'ian',
        name: 'Ian Arneson',
        nickname: 'Ian',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Fun,
        starLevel: 4,
        residenceName: "Ian Arneson's House"
    },
    {
        id: 'yuki',
        name: 'Yuki',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Fun,
        starLevel: 4,
        residenceName: "Yuki's House"
    },
    {
        id: 'gertrude',
        name: 'Gertrude Spackle',
        nickname: 'Gertrude',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Fun,
        starLevel: 4,
        residenceName: "Gertrude's House"
    },
    {
        id: 'makoto',
        name: 'Makoto',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Fun,
        starLevel: 4,
        residenceName: "Makoto's House"
    },
    {
        id: 'crystal',
        name: 'Crystal',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Cute,
        starLevel: 4,
        residenceName: "Crystal's House"
    },
    {
        id: 'linda',
        name: 'Linda',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Geeky,
        starLevel: 4,
        residenceName: "Linda's House"
    },
    {
        id: 'ruthie',
        name: 'Grandma Ruthie',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Spooky,
        starLevel: 4,
        residenceName: "Grandma Ruthie's House"
    },
    {
        id: 'edwin',
        name: 'Edwin',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Spooky,
        starLevel: 4,
        residenceName: "Edwin's House"
    },
    {
        id: 'sasha',
        name: 'Sasha',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Geeky,
        starLevel: 4,
        residenceName: "Sasha's House"
    },
    {
        id: 'amelia',
        name: 'Amelia',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Geeky,
        starLevel: 4,
        residenceName: "Amelia's House"
    },
    {
        id: 'alexa',
        name: 'Alexa Lexington',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Spooky,
        starLevel: 4,
        residenceName: "Alexa's Robot Lab",
        tasks: [
            {
                items: [
                    {
                        item: 'Desk',
                        essences: [
                            {
                                essenceId: 'gold',
                                amount: 8
                            },
                            {
                                essenceId: 'metal',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Chair',
                        essences: [
                            {
                                essenceId: 'gold',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'star',
                                amount: 6
                            },
                            {
                                essenceId: 'spring',
                                amount: 6
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Robot Table',
                        essences: [
                            {
                                essenceId: 'cube-puzzle',
                                amount: 10
                            },
                            {
                                essenceId: 'robot',
                                amount: 10
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'cedella',
        name: 'Cedella',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Cute,
        starLevel: 4,
        residenceName: "Cedella's Cafe",
        tasks: [
            {
                items: [
                    {
                        item: 'Pizza Oven',
                        essences: [
                            {
                                essenceId: 'lemon',
                                amount: 6
                            },
                            {
                                essenceId: 'lime',
                                amount: 6
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'globe',
                                amount: 4
                            },
                            {
                                essenceId: 'red-apple',
                                amount: 2
                            }
                        ]
                    },
                    {
                        item: 'Bookshelf',
                        essences: [
                            {
                                essenceId: 'pencil',
                                amount: 4
                            },
                            {
                                essenceId: 'green-apple',
                                amount: 2
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Drink Dispenser',
                        essences: [
                            {
                                essenceId: 'banana',
                                amount: 8
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'terry',
        name: 'Terry Toymender',
        nickname: 'Terry',
        type: SimType.Commercial,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Studious,
        starLevel: 4,
        residenceName: "Terry's Toy Store",
        tasks: [
            {
                items: [
                    {
                        item: 'Sculpture',
                        essences: [
                            {
                                essenceId: 'tim-doll',
                                amount: 4
                            },
                            {
                                essenceId: 'tina-doll',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Wall Sculpture',
                        essences: [
                            {
                                essenceId: 'tim-doll',
                                amount: 2
                            },
                            {
                                essenceId: 'tina-doll',
                                amount: 2
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Stereo',
                        essences: [
                            {
                                essenceId: 'musical-note',
                                amount: 4
                            },
                            {
                                essenceId: 'yellow-crayon',
                                amount: 4
                            }
                        ]
                    },
                    {
                        item: 'Arcade Game',
                        essences: [
                            {
                                essenceId: 'musical-note',
                                amount: 4
                            },
                            {
                                essenceId: 'red-crayon',
                                amount: 4
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        item: 'Amusement Ride',
                        essences: [
                            {
                                essenceId: 'kitten',
                                amount: 6
                            },
                            {
                                essenceId: 'magic-carpet',
                                amount: 2
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'summer',
        name: 'Summer',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Tasty,
        starLevel: 5,
        residenceName: "Summer's House"
    },
    {
        id: 'brendan',
        name: 'Brendan',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Spooky,
        starLevel: 5,
        residenceName: "Brendan's House"
    },
    {
        id: 'clayton',
        name: 'Clayton Dander',
        nickname: 'Clayton',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Spooky,
        starLevel: 5,
        residenceName: "Clayton's House"
    },
    {
        id: 'renee',
        name: 'Renée',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Geeky,
        starLevel: 5,
        residenceName: "Renée's House"
    },
    {
        id: 'blaine',
        name: 'Blaine',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Tasty,
        starLevel: 5,
        residenceName: "Blaine's House"
    },
    {
        id: 'esma',
        name: 'Esma',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Fun,
        starLevel: 5,
        residenceName: "Esma's Palace"
    },
    {
        id: 'taylor',
        name: 'Taylor',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Studious,
        dislike: EssenceType.Spooky,
        starLevel: 5,
        residenceName: "Taylor's House"
    },
    {
        id: 'rob',
        name: 'Rob Jarrett',
        nickname: 'Rob',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Cute,
        starLevel: 5,
        residenceName: "Rob's House"
    },
    {
        id: 'penelope',
        name: 'Penelope',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Studious,
        starLevel: 5,
        residenceName: "Penelope's House"
    },
    {
        id: 'abigail',
        name: 'Abigail',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Fun,
        starLevel: 5,
        residenceName: "Abigail's House"
    },
    {
        id: 'iggy',
        name: 'Iggy',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Studious,
        starLevel: 5,
        residenceName: "Iggy's House"
    },
    {
        id: 'beebee',
        name: 'Beebee',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Tasty,
        starLevel: 5,
        residenceName: "Beebee's House"
    },
    {
        id: 'luis',
        name: 'Luis',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Spooky,
        starLevel: 5,
        residenceName: "Luis's House"
    },
    {
        id: 'billy',
        name: 'Billy',
        type: SimType.Townie,
        primaryInterest: EssenceType.Cute,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Geeky,
        starLevel: 5,
        residenceName: "Billy's House"
    },
    {
        id: 'yvette',
        name: 'Yvette',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Tasty,
        starLevel: 5,
        residenceName: "Yvette's House"
    },
    {
        id: 'eliza',
        name: 'Eliza',
        type: SimType.Townie,
        primaryInterest: EssenceType.Studious,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Cute,
        starLevel: 5,
        residenceName: "Eliza's House"
    },
    {
        id: 'morcubus',
        name: 'Morcubus',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Cute,
        starLevel: 5,
        residenceName: "The House of Morcubus"
    },
    {
        id: 'karine',
        name: 'Karine',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Spooky,
        starLevel: 5,
        residenceName: "Karine's House"
    },
    {
        id: 'noelle',
        name: 'Noelle',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Cute,
        dislike: EssenceType.Studious,
        starLevel: 5,
        residenceName: "Noelle's House"
    },
    {
        id: 'jimmy',
        name: 'Jimmy Watanabe',
        nickname: 'Jimmy',
        type: SimType.Townie,
        primaryInterest: EssenceType.Tasty,
        secondaryInterest: EssenceType.Fun,
        dislike: EssenceType.Studious,
        starLevel: 5,
        residenceName: "Jimmy's House"
    },
    {
        id: 'spencer',
        name: 'Spencer',
        type: SimType.Townie,
        primaryInterest: EssenceType.Geeky,
        secondaryInterest: EssenceType.Tasty,
        dislike: EssenceType.Fun,
        starLevel: 5,
        residenceName: "Spencer's House"
    },
    {
        id: 'chaz',
        name: 'Chaz McFreely',
        nickname: 'Chaz',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Spooky,
        dislike: EssenceType.Geeky,
        starLevel: 5,
        residenceName: "Chaz's House"
    },
    {
        id: 'pablo',
        name: 'Pablo',
        type: SimType.Townie,
        primaryInterest: EssenceType.Fun,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Spooky,
        starLevel: 5,
        residenceName: "Pablo's House"
    },
    {
        id: 'brandi',
        name: 'Brandi',
        type: SimType.Townie,
        primaryInterest: EssenceType.Spooky,
        secondaryInterest: EssenceType.Geeky,
        dislike: EssenceType.Cute,
        starLevel: 5,
        residenceName: "Brandi's House"
    },
]

export const kingdomSims: Sim[] = [
    {
        id: 'alexa',
        name: 'Alexa Lexington',
        residenceName: Location.RocketReef,
    },
    {
        id: 'barney',
        name: 'Barney Cull',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'buddy',
        name: 'Buddy',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'chaz',
        name: 'Chaz McFreely',
        residenceName: Location.TheRoyalAcademy,
    },
    {
        id: 'gino',
        name: 'Chef Gino Delicioso',
        residenceName: Location.CowboyJunction,
    },
    {
        id: 'candy',
        name: 'DJ Candy Supergroove',
        residenceName: Location.Candypalooza,
    },
    {
        id: 'dr-f',
        name: 'Dr. F',
        residenceName: Location.RocketReef,
    },
    {
        id: 'beverly',
        name: 'Duchess Beverly',
        residenceName: Location.Cutopia,
    },
    {
        id: 'elmira',
        name: 'Elmira Clamp',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'gonk',
        name: 'Gonk',
        residenceName: Location.TheUnchartedIsle,
    },
    {
        id: 'gordon',
        name: 'Gordon',
        residenceName: Location.TrevorIsland,
    },
    {
        id: 'goth-boy',
        name: 'Goth Boy',
        residenceName: Location.Spookane,
    },
    {
        id: 'ruthie',
        name: 'Grandma Ruthie',
        residenceName: Location.Spookane,
    },
    {
        id: 'hopper',
        name: 'Hopper',
        residenceName: Location.ForestOfTheElves,
    },
    {
        id: 'king-roland',
        name: 'King Roland',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'leaf',
        name: 'Leaf',
        residenceName: Location.ForestOfTheElves,
    },
    {
        id: 'liberty',
        name: 'Liberty',
        residenceName: Location.TheRoyalAcademy,
    },
    {
        id: 'linda',
        name: 'Linda',
        residenceName: Location.TrevorIsland,
    },
    {
        id: 'daniel',
        name: 'Lord Daniel',
        residenceName: Location.Cutopia,
    },
    {
        id: 'lyndsay',
        name: 'Lyndsay',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'marlon',
        name: 'Marlon',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'morcubus',
        name: 'Morcubus',
        residenceName: Location.Spookane,
    },
    {
        id: 'gabby',
        name: "Ol' Gabby",
        residenceName: Location.CowboyJunction,
    },
    {
        id: 'petal',
        name: 'Petal',
        residenceName: Location.ForestOfTheElves,
    },
    {
        id: 'poppy',
        name: 'Poppy',
        residenceName: Location.Cutopia,
    },
    {
        id: 'princess-butter',
        name: 'Princess Butter',
        residenceName: Location.CapitalIsland,
    },
    {
        id: 'proto',
        name: 'Proto-Makoto',
        residenceName: Location.ForestOfTheElves,
    },
    {
        id: 'renee',
        name: 'Renée',
        residenceName: Location.ReneesNaturePreserve,
    },
    {
        id: 'rosalyn',
        name: 'Rosalyn P. Marshall',
        residenceName: Location.TheRoyalAcademy,
    },
    {
        id: 'roxie',
        name: 'Roxie Road',
        residenceName: Location.CowboyJunction,
    },
    {
        id: 'rusty',
        name: 'Rusty',
        residenceName: Location.CowboyJunction,
    },
    {
        id: 'sapphire',
        name: 'Sapphire',
        residenceName: Location.Candypalooza,
    },
    {
        id: 'ginny',
        name: 'Sheriff Ginny',
        residenceName: Location.CowboyJunction,
    },
    {
        id: 'spencer',
        name: 'Sir Spencer',
        residenceName: Location.Cutopia,
    },
    {
        id: 'vincent',
        name: 'Sir Vincent',
        residenceName: Location.TheUnchartedIsle,
    },
    {
        id: 'summer',
        name: 'Summer',
        residenceName: Location.TheRoyalAcademy,
    },
    {
        id: 'sylvia',
        name: 'Sylvia',
        residenceName: Location.TheUnchartedIsle,
    },
    {
        id: 'tobor',
        name: 'T.O.B.O.R.',
        residenceName: Location.RocketReef,
    },
    {
        id: 'travis',
        name: 'Travis',
        residenceName: Location.TheRoyalAcademy,
    },
    {
        id: 'trevor',
        name: 'Trevor Verily',
        residenceName: Location.TrevorIsland,
    },
    {
        id: 'vic',
        name: 'Vic Vector',
        residenceName: Location.RocketReef,
    },
    {
        id: 'violet',
        name: 'Violet Nightshade',
        residenceName: Location.Cutopia,
    },
    {
        id: 'yuki',
        name: 'Yuki',
        residenceName: Location.Spookane,
    },
    {
        id: 'zack',
        name: 'Zack',
        residenceName: Location.Candypalooza,
    },
    {
        id: 'zombie-carl',
        name: 'Zombie Carl',
        residenceName: Location.Spookane,
    },
]