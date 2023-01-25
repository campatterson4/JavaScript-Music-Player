const container = document.querySelector('.container')
const albumCover = document.querySelector('#album-cover')
const songTitle = document.querySelector('#song-title')
const prev = document.querySelector('#previous')
const next = document.querySelector('#next')
const playing = document.querySelector('#playing')
const progressContainer = document.querySelector('.progress-container')
const music = document.querySelector('#music')
const progress = document.querySelector('.progress')

const songs = ['Georgia', 'If I Fall', 'We Fell in Love in October']

let songFiles = 0

playSong(songs[songFiles])

function playSong(song) {
    songTitle.innerText = song
    albumCover.src = `images/${song}.jpg`
    music.src = `resources/${song}.mp3`
}

playing.addEventListener('click', () => {
    const nowPlaying = container.classList.contains('playing')

    if(nowPlaying) {
        stopSong()
    } else {
        startSong()
    }
 });

 function startSong() {
    container.classList.add('playing')
    playing.querySelector('i.fas').classList.remove('fa-play')
    playing.querySelector('i.fas').classList.add('fa-pause')
    music.play()
 }

function stopSong() {
    container.classList.remove('playing')
    playing.querySelector('i.fas').classList.add('fa-play')
    playing.querySelector('i.fas').classList.remove('fa-pause')
    music.pause()
}

function nextSong() {
    songFiles++
    if(songFiles > songs.length - 1) {
        songFiles = 0
    }

    playSong(songs[songFiles])
    startSong()
}

function previousSong() {
    songFiles--
    if(songFiles < 0) {
        songFiles = songs.length - 1
    }

    playSong(songs[songFiles])
    startSong()   
}

next.addEventListener('click', nextSong)
prev.addEventListener('click', previousSong)

music.addEventListener('timeupdate', showProgress)

function showProgress(x) {
    const {duration, currentTime} = x.srcElement
    const progressBar = (currentTime / duration) * 100
    progress.style.width = `${progressBar}%`
}

progressContainer.addEventListener('click', clickProgress)

function clickProgress(x) {
    const width = this.clientWidth
    const click = x.offsetX
    const duration = music.duration

    music.currentTime = (click / width) * duration
}

music.addEventListener('ended', nextSong)