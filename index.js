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

let songFiles = 2

playSong(songs[songFiles])

function playSong(song) {
    songTitle.innerText = song
    albumCover.src = `images/${song}.jpg`
    music.src = `resources/${song}.mp3`
}

