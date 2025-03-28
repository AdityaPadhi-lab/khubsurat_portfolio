import React from 'react'

export default function Spotify() {
    return (
        <div>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg" frameBorder="0" title="Spotify/Tanisha's playlist" className="h-full w-full bg-ub-cool-grey"></iframe>
        </div>
    )
}

export const displaySpotify = () => {
    <Spotify> </Spotify>
}
