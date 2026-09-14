import { useParams } from "react-router";
function ProductDetails() {
    const { id } = useParams();
    return (
        <>
            <h1>Prdoduct Details</h1>
            <h2>Product Id: {id}</h2>
        </>
    )
}
export default ProductDetails;