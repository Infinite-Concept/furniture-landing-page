let play = document.getElementById("play")

play.addEventListener("click", () => {
    let video = document.getElementById("video")
    if(video.paused == true){
        video.play()
        play.children[0].src = "./assets/pause-solid.svg"
    }else{
        video.pause()
        play.children[0].src = "./assets/play-solid.svg"
    }
})