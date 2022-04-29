import './Slider.css'

export default function Slider(props) {
    let size = props.size / 2.5
    let colours = ["blue", "pink", "orange", "aqua", "red", "lime", "purple", "grey", "yellow", "black"]
    let x = 0
    const panels = colours.map((item,index) => <Panel size={size} 
                                                      image={item} 
                                                      position={index + 1 + props.offset} 
                                                      total={colours.length} 
                                                      speed={props.speed}
                                                ></Panel>
                    );
    return (
        <div className='Slider' style={{height: size + "vw", width: size * 2.5 + "vw"}}>
            {panels}
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
    if (position == 0) {
        size = props.size * 0.5
        opacity = 0
        zIndex = 0
        margin = props.size * .25 + "vw"
    } else if (position == 1) {
        size = props.size * 0.5
        zIndex = 1
        margin = props.size * .25 + "vw"
    } else if (position == 2) {
        size = props.size * 0.75
        pos = (props.size * .25)
        zIndex = 2
        margin = props.size * .125 + "vw"
    } else if (position == 3) {
        size = props.size
        pos = props.size * .75
        zIndex = 3
        margin = "0vw"
    } else if (position == 4) {
        size = props.size * 0.75
        pos = (props.size * 1.5)
        zIndex = 2
        margin = props.size * .125 + "vw"
    } else if (position == 5) {
        size = props.size * 0.5
        pos = props.size * 2
        zIndex = 1
        margin = props.size * .25 + "vw"
    } else if (position == 6) {
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

        </div>
    );
}