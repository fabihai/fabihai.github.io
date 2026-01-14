import './Card.css';

function Card(props) {
    const targetValue = (props.title === "Watermelon Pop" || props.title === "If I Must Die") ? "_self" : "_blank";
    return (
        <div className="col-6">
            <div className="card">
            <img className="card-img-top object-fit-cover h-100 attachment" src={props.visual} alt="visual of project"/>
            <div className="card-body">
                <h3 className="card-title"><b>{props.title}</b></h3>
                <p className="card-subtitle"><b>Tools</b>: {props.tools}</p>
                <a className="card-link" href={props.link} target={targetValue}>
                    <span>{props.linktext} </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </a>
                {/* <a><i className="bi bi-box-arrow-up-right"></i></a> */}
            </div>
            </div>
        </div>
    )
}

export default Card;