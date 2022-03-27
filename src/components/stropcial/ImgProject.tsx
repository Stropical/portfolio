export const Project = function (props) {
    return( 
        <div className="imgprj" style={{
            gridColumnStart: props.xStart,
            gridColumnEnd: props.xEnd,
            gridRowStart: props.yStart,
            gridRowEnd: props.yEnd,
        }}>        
            <h3>{props.category}</h3>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button className="btn">  LINK  </button>
        </div>
    )
}

export default Project;