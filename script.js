console.log("Welcome to Islamic Spotify");
let songIndex = 0;
let AudioElement = new Audio('songs/1.m4a');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let suu = document.getElementById('suu');
let songItems =Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');
let songs =[
{songName: "Tajdar-E-Haram",time:'10:28', filePath: "songs/1.m4a", coverPath: "covers/1.jpg"},
{songName: "যদি নাত লিখতে লিখতে",time:'04:30', filePath: "songs/2.m4a", coverPath: "covers/2.jpg"},
{songName: "Me Sadqey Ya Rasul-Allah",time:'04:58', filePath: "songs/3.m4a", coverPath: "covers/3.jpg"},
{songName: "Muhammad Nabina",time:'04:36', filePath: "songs/4.m4a", coverPath: "covers/4.jpg"},
{songName: "Var do jholi meri",time:'08:20', filePath: "songs/5.m4a", coverPath: "covers/5.jpg"},
{songName: "Faslon ko takalf",time:'04:36', filePath: "songs/6.m4a", coverPath: "covers/6.jpg"},




]

songItems.forEach((element , i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("time")[0].innerText = songs[i].time;

})

// AudioElement.play();
masterPlay.addEventListener('click', ()=> {
    if(AudioElement.paused || AudioElement.currentTime<=0){AudioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        suu.style.opacity = 1;
    }
   
   else{
    {AudioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
   masterPlay.classList.add('fa-play-circle');
   suu.style.opacity = 0;

}
   }
});






AudioElement.addEventListener('timeupdate', ()=>{

progress = parseInt((AudioElement.currentTime/AudioElement.duration)*100);

progressBar.value = progress;

})
progressBar.addEventListener('change' , ()=>{
    AudioElement.currentTime = progressBar.value * AudioElement.duration/100;
})
const makeAllPlays = () =>{
    Array.from (document.getElementsByClassName('songitemsplay')).forEach((element)=>{
        
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
        
    }) 
}
Array.from (document.getElementsByClassName('songitemsplay')).forEach((element)=>{
   
    element.addEventListener('click', (e)=>{
        makeAllPlays();
       
        songIndex = parseInt(e.target.id)
e.target.classList.remove('fa-play-circle')
e.target.classList.add('fa-pause-circle');
AudioElement.src = `songs/${songIndex}.m4a`;
masterSongName.innerText = songs[songIndex].songName;
AudioElement.currentTime = 0;
AudioElement.play();
suu.style.opacity = 1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
    })
});

document.getElementById('pre').addEventListener('click', ()=>{
    if(songIndex<0){
        songIndex=5;
    }
    else{
        songIndex -=1;
    }
    AudioElement.src = `songs/${songIndex}.m4a`;
    masterSongName.innerText = songs[songIndex+1].songName;
AudioElement.currentTime = 0;
AudioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('nxt').addEventListener('click', ()=>{
    if(songIndex>5){
        songIndex = 1
    }
    else{
        songIndex +=1;
    }
    AudioElement.src = `songs/${songIndex}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
AudioElement.currentTime = 0;
AudioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})