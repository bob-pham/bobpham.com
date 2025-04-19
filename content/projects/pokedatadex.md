---
title: PokeDataDex
description: CRUD web app created as part of CPSC 304
link: pokedatadex
startDate: 11-01-2023
endDate: 12-01-2023
tech: 
- JavaScript
- PHP
- MySQL
logo: /projects/pokedatadex/logo.png
gitLink: https://github.com/bob-pham/RightAngle
demoImages:
- /projects/pokedatadex/pokedatadexhome.png
- /projects/pokedatadex/playerleaderboard.png
- /projects/pokedatadex/pokedatadex query.png
- /projects/pokedatadex/view tables.png
---

PokeDataDex is a Pokemon Go journal that aims to allow players to keep track of
their activities and interactions with both in-game and outside of game
elements. Our database models different in-game aspects that players may want
to keep track of, in addition to actions that players may do in-game. As such,
players can keep track of what they have accomplished within the game, as well
as compare with other players. Created as part of CPSC 304

<div className="grid place-items-center">
    <a href="https://www.students.cs.ubc.ca/~bobpham/PokeDataDex.php?">
    <button className="bg-zinc-950 border border-white rounded-3xl px-3 text-white">
            Try It Here!
    </button>
    </a>
</div>

### Development + Implementation

---

As previously mentioned, this project was created as part of CPSC 304, and was
set out to be a crud app.

![schema](/projects/pokedatadex/schema.png)

The bulk of the work came with designing and normalizing the database that we
were going to create. We decided to keep it minimal, and only capture the most
relevant portions of the game. It is noted that some relationships don't exist
in the game either, but were created in order to meet complexity requirements.
An ER diagram of the schema can be seen below.
