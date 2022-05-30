import './Social.css'

function Social() {
    const socials = ["Medium", "Facebook", "Instagram", "Twitter", "Spotify"]

    return (
        <div className='Social'>
            {socials.map(() => <div className='icon'></div>)}
        </div>
    );
}

export default Social;