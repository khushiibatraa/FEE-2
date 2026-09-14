import { useState } from "react";

function Formhandling() {
    const [name, setName] = useState("");
    const [lastname, setlastname] = useState("")
    function handleNamechange(e) {
        setName(e.taeget.value);
    }
    function handleLastnamechange(e) {
        setLastname(e.taeget.value);
    }
    return (
        <>
            
        </>
    )
}
export default Formhandling;