import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');;
    const handleClick = (e) => {
        setName('luigi');
    }
    const handleClickAgain = (name) => {
        console.log("Button is clicked by " + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>Name: { name }</p>
            <button onClick={ handleClick }>Click Me</button>
            <button onClick={ () => {
                handleClickAgain("Ankit");
            } }>Click Me Again</button>
        </div>
     );
}
 
export default Home;