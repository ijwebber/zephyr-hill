import './Slider.css'

export default function Slider(props) {
    let size = props.size / 2.5
    let colours = ["blue", "pink", "orange", "aqua", "red", "lime", "purple"]
    let x = 0
    //const panels = colours.map((item,index) => <Panel size={size} image={item} position={index}></Panel>)
    return (
        <div className='Slider' style={{height: size + "vw", width: size * 2.5 + "vw"}}>
            <Panel size={size} image={"blue"} position={x % 5}></Panel>
            <Panel size={size} image={"pink"} position={(x + 1) % 5}></Panel>
            <Panel size={size} image={"red"} position={(x + 2) % 5}></Panel>
            <Panel size={size} image={"orange"} position={(x + 3) % 5}></Panel>
            <Panel size={size} image={"aqua"} position={(x + 4) % 5}></Panel>
        </div>
    );
}

function Panel(props) {
    let image = props.image

    let size = 0
    let pos = 0
    let zIndex = 0
    if (props.position == 0) {
        size = props.size * 0.5
        pos = 0
        zIndex = 1
    } else if (props.position == 1) {
        size = props.size * 0.75
        pos = (props.size * .25)
        zIndex = 2
    } else if (props.position == 2) {
        size = props.size
        pos = props.size * .75
        zIndex = 3
    } else if (props.position == 3) {
        size = props.size * 0.75
        pos = (props.size * 1.5)
        zIndex = 2
    } else if (props.position == 4) {
        size = props.size * 0.5
        pos = props.size * 2
        zIndex = 1
    } else {
        size = 0
        pos = 0
    }

    return (
        <div style={{
            backgroundColor: image, 
            width: size + "vw",
            height: size + "vw",
            transform: "translateX(" + pos + "vw)", 
            transition: "height .5s, width .5s, transform .5s, margin .5s",
            position: 'absolute',
            opacity: 1,
            zIndex: zIndex,
            marginTop: (3 - zIndex) * props.size * .125 + "vw", 
        }}>

        </div>
    );
}