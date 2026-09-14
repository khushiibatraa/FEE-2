import Productcard from "./Productcard";
function Home() {
    const a = 5, b = 10;
    function greet() {
        return "hii";
    }
    const name = "khushi";

    const fruits = [ "apple", "banana", "mango", "kiwi","muskmelon"];
    return (
        <>
            <h1>Home</h1>
            <h2>hello</h2>
            <p>{a}</p>
            <p>{a + b}</p>
            <p>Sum = {a + b}</p>
            <p>{greet()}</p>
            <p>{name.toUpperCase()}</p>
            <p className="text">Hii</p> {/*class changed to class name(camel case for properties) */}
            <label htmlFor=""></label>

            <p style={{ backgroundColor: "blue", color: "red" }}>CSS</p> {/*1st curly braces for object(means that we are writing js and the 2nd means it is style object) */}
            
            <p>{a > 5 ? "greater" : "smaller"}</p>
            

            {/* <Productcard name="Iphone 17" description="Mobile Phone" price={80000} available={true} />
            <Productcard name ="Samsung Galaxy" description="Mobile Phone" price={60000} available={false}/>
            <Productcard name ="Sony Camera" description="Camera" price={50000} available={false}/>
            <Productcard name ="Blue Jeans" description="Clothing" price={2000} available={true}/> */}

            {/* <ul>
                {fruits.map((fruit,index) => {
                    return (
                        <li key="index">{fruit}</li>
                    )
                })}
            </ul> */}

            const Productdetails=[<Productcard name="Iphone 17" description="Mobile Phone" price={80000} available={true} />
            <Productcard name ="Samsung Galaxy" description="Mobile Phone" price={60000} available={false}/>
            <Productcard name ="Sony Camera" description="Camera" price={50000} available={false}/>
            <Productcard name ="Blue Jeans" description="Clothing" price={2000} available={true}/>]
            
        </>
    )
}
export default Home;