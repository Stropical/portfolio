export const BigProject = function (props) {
    return( 
        <div className="prj" style={{
            gridColumnStart: props.xStart,
            gridColumnEnd: props.xEnd,
            gridRowStart: props.yStart,
            gridRowEnd: props.yEnd,
        }}>        
            <h3>{props.category}</h3>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div style={{backgroundImage: `url(${props.imgurl})`}}></div>
            <h5 style={{marginTop: "10px"}}>{props.date}</h5>
        </div>
    )
}

export default BigProject;