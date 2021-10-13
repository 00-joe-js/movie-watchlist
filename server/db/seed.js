const { dbConnection, Movie, Genre } = require("./index");

const runSeed = async () => {
    await dbConnection.sync({ force: true });


    const horrorGenre = await Genre.create({ name: "Horror" });
    const comedyGenre = await Genre.create({ name: "Comedy" });
    const sciFiGenre = await Genre.create({ name: "Science Fiction" });
    const dramaGenre = await Genre.create({ name: "Drama" });
    const animGenre = await Genre.create({ name: "Animation" });
    const familyGenre = await Genre.create({ name: "Family" });

    const donnieDarko = await Movie.create({
        title: "Donnie Darko",
        imdbLink: "https://www.imdb.com/title/tt0246578"
    });
    await donnieDarko.setGenres([horrorGenre, sciFiGenre]);

    const cabinInTheWoods = await Movie.create({
        title: "Cabin in the Woods"
    });
    await cabinInTheWoods.setGenres([horrorGenre, comedyGenre, sciFiGenre]);

    const corpseBride = await Movie.create({
        title: "Corpse Bride",
        imdbLink: "https://www.imdb.com/title/tt0121164"
    });
    await corpseBride.setGenres([animGenre, dramaGenre, familyGenre]);

    const nightmareBeforeChristmas = await Movie.create({
        title: "Nightmare Before Christmas",
    });
    await nightmareBeforeChristmas.setGenres([familyGenre, animGenre]);

    console.log("Seed is complete!");
    process.kill(0);
};
runSeed();
