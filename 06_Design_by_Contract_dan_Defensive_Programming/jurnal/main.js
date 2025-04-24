const SayaTubeUser = require('./SayaTubeUser');
const SayaTubeVideo = require('./SayaTubeVideo');


const namaPraktikan = "Naufal";
const user = new SayaTubeUser(namaPraktikan);


const filmList = [
    "The Shawshank Redemption",
    "The Godfather",
    "Schindler's List",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "The Matrix",
    "Inception",
    "Interstellar",
    "The Prestige"
];


filmList.forEach(judul => {
    const video = new SayaTubeVideo(`Review Film ${judul} oleh ${namaPraktikan}`);
    video.increasePlayCount(1000000); 
    user.addVideo(video);
});


user.printAllVideoPlaycount();
console.log(`Total semua play count: ${user.getTotalVideoPlayCount()}`);
