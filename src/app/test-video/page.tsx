// TODO: This test page should be removed before production
'use client'

import { useState } from 'react'

export default function TestVideo() {
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        const video = document.getElementById('test-video') as HTMLVideoElement
        if (video) {
            video.currentTime = 0
            video.play()
            setIsPlaying(true)
        }
    }

    const handlePause = () => {
        const video = document.getElementById('test-video') as HTMLVideoElement
        if (video) {
            video.pause()
            video.currentTime = 0
            setIsPlaying(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
            <div className="max-w-2xl w-full space-y-8">
                <h1 className="text-4xl font-bold text-white text-center">Video Test</h1>

                <div className="bg-white/10 p-8 rounded-2xl">
                    <video
                        id="test-video"
                        src="/Begaiym.MP4"
                        className="w-full rounded-lg"
                        style={{ transform: 'rotate(90deg)' }}
                        muted
                        playsInline
                        preload="auto"
                        onEnded={() => {
                            setIsPlaying(false)
                        }}
                    />
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={handlePlay}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Play Video
                    </button>
                    <button
                        onClick={handlePause}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
                    >
                        Stop Video
                    </button>
                </div>

                <div className="text-white text-center">
                    <p>Status: {isPlaying ? 'Playing' : 'Stopped'}</p>
                    <p className="text-sm text-white/60 mt-2">Open console (F12) to see logs</p>
                </div>
            </div>
        </div>
    )
}
