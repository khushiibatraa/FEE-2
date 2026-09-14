function Productcard(props) {
    return (
        <>
        <div style = {{border:"2px solid red", width:"400px"}}>
            <p>Product name : {props.name}</p>
            <p>Product description : {props.description}</p>
            <p>Stock : 5</p>
            <p>Price: {props.price}</p>
            <p>Available : {props.available? "AVAILABLE":"NOT AVAILABLE"}</p>
            <button>Buy Now</button>
            <button>Add to card</button>
            </div>
        </>
    )
}
export default Productcard;