import './Slider.css'
import svgArrow from '../../assets/slider-imgs/Arrow.svg'

export default function Slider(props) {
    let size = props.size / 2.5
    let images = props.images
    const panels = images.map((item,index) => <Panel size={size} 
                                                      image={item.image} 
                                                      position={index + 1 + props.offset} 
                                                      total={images.length} 
                                                      speed={props.speed}
                                                ></Panel>
                    );
    return (
        <div className='Slider'>
            {/*TODO add hover effect to the arrows (make it another component)*/ }
            <img src={svgArrow} className='arrow left' onClick={props.clickLeft}></img>
            <div className='main' style={{height: size + "vw", width: size * 2.5 + "vw"}}>
                {panels}        
            </div>
            <img src={svgArrow} className='arrow right' onClick={props.clickRight}></img>
        </div>
    );
}

function Panel(props) {
    let image = props.image;
    let size = 0;
    let pos = 0;
    let margin = 0;

    let position = props.position % props.total;
    if (position < 0) position = position + props.total;

    let zIndex = 0;
    let opacity = 1;
    if (position === 0) {
        size = props.size * 0.5
        opacity = 0
        zIndex = 0
        margin = props.size * .25 + "vw"
    } else if (position === 1) {
        size = props.size * 0.5
        zIndex = 1
        margin = props.size * .25 + "vw"
    } else if (position === 2) {
        size = props.size * 0.75
        pos = (props.size * .25)
        zIndex = 2
        margin = props.size * .125 + "vw"
    } else if (position === 3) {
        size = props.size
        pos = props.size * .75
        zIndex = 3
        margin = "0vw"
    } else if (position === 4) {
        size = props.size * 0.75
        pos = (props.size * 1.5)
        zIndex = 2
        margin = props.size * .125 + "vw"
    } else if (position === 5) {
        size = props.size * 0.5
        pos = props.size * 2
        zIndex = 1
        margin = props.size * .25 + "vw"
    } else if (position === 6) {
        size = props.size * 0.5
        pos = props.size * 2
        opacity = 0
        zIndex = 0
        margin = props.size * .25 + "vw"
    } else {
        opacity = 0
        zIndex = -1
        size = props.size * 0.5
        pos = props.size * 2
        margin = props.size * .25 + "vw"
    }

    return (
        <div style={{
            backgroundColor: image, 
            width: size + "vw",
            height: size + "vw",
            transform: "translateX(" + pos + "vw)", 
            transitionProperty: "height, width, transform, margin, opacity",
            transitionDuration: props.speed + "s",
            position: 'absolute',
            opacity: opacity,
            zIndex: zIndex,
            marginTop: margin, 
        }}>
            <img style={{width: "100%", height: "100%"}}src={image}></img>
        </div>
    );
}