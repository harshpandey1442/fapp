import './TextContainer.css'

function TextContainer(){
    return(
        <div className="outer-div">
            <div className="inner-div">
                <div className="div-title">
                    <p className="div-title-text">DELICIOUS FOOD</p>
                </div>
                <div className="div-body">
                    <p className="div-body-text">
                        Order food from favourite restaurants near you.
                        <br />
                            Choose your favorite from our broad selection of avaiablemeals and enjoy a delicious lunch or dinner at home.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TextContainer;