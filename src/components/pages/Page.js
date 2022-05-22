import './Page.css'

function Page(props) {

    let bg = props.bg === null ? "white" : props.bg;

    return (
        <div className="Page" style={{backgroundColor: bg}} name="Page">
            {props.children}
        </div>
    );
}

export default Page;