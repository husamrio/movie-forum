User.destroy_all
Movie.destroy_all
Review.destroy_all

puts "start seeding"

User.create(username: "Joe", password:"joe1")
User.create(username: "Barbs", password:"barbs2")
User.create(username: "Ivan", password:"ivan4")
User.create(username: "Aziz", password:"aziz3")
User.create(username: "J.D", password:"jd5")

movies = [
    {   title: "Black Adam",
        overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        vote_average: 7.3
    },{   title: "The Woman King",
        overview: "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
        poster_path: "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
        vote_average: 7.9
    },{   title: "Paradise City",
        overview: "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
        poster_path: "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
        vote_average: 6.4
    },{   title: "Cop Secret",
        overview: "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
        poster_path: "/jnWyZsaCl3Ke6u6ReSmBRO8S1rX.jpg",
        vote_average: 6.3
    },{   title: "R.I.P.D. 2: Rise of the Damned",
        overview: "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
        poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
        vote_average: 6.7
    },{   title: "Hex",
        overview: "Following a mysterious disappearance on a jump, a group of skydivers experience paranormal occurrences that leave them fighting for their lives.",
        poster_path: "/xFJHb43ZAnnuiDztxZYsmyopweb.jpg",
        vote_average: 5.1
    },{   title: "Black Panther: Wakanda Forever",
        overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        poster_path: "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
        vote_average: 7.5
    },{   title: "Lost Bullet 2",
        overview: "Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.",
        poster_path: "/uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg",
        vote_average: 6.6
    },{   title: "Polar",
        overview: "MG, a policewoman who has been expelled from the Corps due to the problems with alcohol and drugs that she has had since the loss of her son, receives a call from a man asking her to look for Macarena Gómez, a popular TV actress.",
        poster_path: "/efuKHH9LqBZB67AS87kprLgaYO8.jpg",
        vote_average: 7.5
    },{   title: "One Way",
        overview: "On the run with a bag full of cash after a robbing his former crime boss—and a potentially fatal wound—Freddy slips onto a bus headed into the unrelenting California desert. With his life slipping through his fingers, Freddy is left with very few choices to survive.",
        poster_path: "/uQCxOziq79P3wDsRwQhhkhQyDsJ.jpg",
        vote_average: 6.4
    },{   title: "Corrective Measures",
        overview: "Set in San Tiburon, the world's most dangerous maximum-security penitentiary and home to the world's most treacherous superpowered criminals, where tensions among the inmates and staff heighten, leading to anarchy that engulfs the prison and order is turned upside down.",
        poster_path: "/aHFq9NMhavOL0jtQvmHQ1c5e0ya.jpg",
        vote_average: 5.1
    },{   title: "The Minute You Wake Up Dead",
        overview: "A stockbroker in a small southern town gets embroiled in an insurance scam with a next-door neighbor that leads to multiple murders when a host of other people want in on the plot. Sheriff Thurmond Fowler, the by-the-book town sheriff for over four decades, works earnestly to try and unravel the town’s mystery and winds up getting more than he bargained for.",
        poster_path: "/pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
        vote_average: 4.9
    },{   title: "The Guardians of the Galaxy Holiday Special",
        overview: "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
        poster_path: "/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
        vote_average: 7.5
    },{   title: "Lyle, Lyle, Crocodile",
        overview: "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
        poster_path: "/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
        vote_average: 7.8
    },{   title: "Disenchanted",
        overview: "Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.",
        poster_path:  "/4x3pt6hoLblBeHebUa4OyiVXFiM.jpg",
        vote_average: 7.3
    },{   title: "Smile",
        overview: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
        poster_path: "/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
        vote_average: 6.8
    },{   title: "Blowback",
        overview: "When a master thief is sabotaged during a bank heist and left for dead, he seeks revenge on his former crew one target at a time. Now, with the cops and the mob closing in, he's in the race of his life to reclaim an untold fortune in cryptocurrency from those who double-crossed him.",
        poster_path: "/fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
        vote_average: 6.1
    },{   title: "Nice Sister-In-Law 2",
        overview: "If you give it once, a good brother-in-law who gives everything generously will come!  At the house of her girlfriend Jin-kyung, who lives with pumice stone, her brother and his wife suddenly visit and the four of them live together. At first, Kyung-seok, who was burdened by his girlfriend's brother, began to keep his eyes on his wife, Yeon-su. A bold brother-in-law who walks around in no-bra and panties without hesitation even at his sister-in-law's house. Besides, from a certain moment, he starts to send a hand of temptation to Pyeong-seok first...",
        poster_path: "/3pEs4hmeHvTAsmx09whEaPDOQpq.jpg",
        vote_average: 6.0
    },{   title: "Frank and Penelope",
        overview: "A tale of love and violence when a man on his emotional last legs finds a savior seductively dancing in a run-down strip club. And a life most certainly headed off a cliff suddenly becomes redirected - as everything is now worth dying for.",
        poster_path: "/5NpXoAi3nEQkEgLO09nmotPfyNa.jpg",
        vote_average: 7.8
    },{   title: "Sniper: The White Raven",
        overview: "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
        poster_path: "/lZOODJzwuQo0etJJyBBZJOSdZcW.jpg",
        vote_average: 7.7
    }
]

movies.map {|movie| Movie.create(movie)}

Review.create(user_id:1,movie_id:3, comment:"okay movie",rating: 5)
Review.create(user_id:2,movie_id:6, comment:"awesome💃🏿",rating:7.7 )
Review.create(user_id:3,movie_id:9, comment:"okay-ish",rating: 5.6)
Review.create(user_id:4,movie_id:5, comment:"Best movie ever❤️‍🔥",rating: 8)
Review.create(user_id:5,movie_id:2, comment:"quite dissapointing😭",rating: 4.6)


puts "data seeded"

































