import React, { useState, useRef, useEffect } from 'react';
import { MdReplay30, MdPlayCircleOutline } from 'react-icons/md'
import { GiPauseButton } from 'react-icons/gi'

import "./AudioPlayer.css"


function AudioPlayer({ title, url }) {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    //references
    const audioPlayer = useRef(); // for our audio component
    const progressBar = useRef(); // reference to progress bar
    const animationRef = useRef(); // animation reference

    // useEffect
    useEffect((e) => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])


    // useEffect(() => {
    //     audioPlayer.volume = volume;
    // }, [volume])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60)
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnMinutes}:${returnSeconds}`
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)

        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying)

    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)

    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30)
        changeRange();
    }

    return (
        <div className='footer'>
            <div className='audio-player-block'>

                <audio ref={audioPlayer} src={url} preload='metadata'></audio>
                <button className='forwardBackward' onClick={backThirty}><MdReplay30 className='backwards-30-button' /></button>
                <button className='playPause-block' onClick={togglePlayPause}>
                    {isPlaying ? <GiPauseButton className='pause-button' /> : <MdPlayCircleOutline className='play-button' />}
                </button>


                {/* current time */}
                <div className='currentTime'>{calculateTime(currentTime)}</div>

                { /* progress bar*/}
                <div className='song-name-and-progress-bar'>

                <div className='name-block'>{title}</div>
                <input type='range' className='progressBar' defaultValue='0' ref={progressBar} onChange={changeRange} />
                </div>


                {/* duration */}
                <div className='duration'>{(duration && !isNaN(duration)) ? calculateTime(duration) : null}</div>

                {/* Volume input */}
                {/* <input type='range' className='volumeSlider' defaultValue={volume} ref={volumeSlider} onChange={(e) => setVolume(e.target.value)} /> */}


            </div>
        </div>
    );
}

export default AudioPlayer;
