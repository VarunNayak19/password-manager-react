import './greenBox.css'

const GreenBox = (props:any) => {
    return (
        <div className='greenBox'>
            <p className='congratsText'>{props.message}</p>
            {/* <p className='crossSymbol'>x</p> */}
            <i className="fa-solid fa-xmark crossSymbol"></i>
        </div>
    )
}

export default GreenBox