import './Social.css'

function Social() {
    const socials = ["Medium", "Facebook", "Instagram", "Twitter", "Spotify"]

    return (
        <div className='Social'>
            {socials.map((item) => <div className='icon' key={item + "Icon"}></div>)}
        </div>
    );
}

export default Social;