const Phone = (props) =>{
    return ( <div className="component">
        <section  >
            <img src={props.image} alt={props.modelName}></img>
            <h3>{props.modelName}</h3>
            <h4>{props.brand}</h4>
            <p> ₹{props.price}</p>
            <div className="slno">
                <span> <p>{props.number + 1}</p></span>
            </div>
            <span className="prime">✔prime</span>
        </section>
    </div> )
}

export default Phone;