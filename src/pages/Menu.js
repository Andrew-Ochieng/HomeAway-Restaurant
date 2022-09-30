// import {useState, useEffect } from "react";
import data from "../data"
import "./Menu.css"

const Menu = () => {
    console.log(data)
    const listItems = data.map((item) => 
    <div className="card" key={item.id}>
        <div>
        <div className="card_img">
            <img src={item.img} />
        </div>
        <div className="card_header">
            <h2>{item.title}</h2>
            <h3>{item.category}</h3>
            <h4>{item.price}</h4>
            <p>{item.desc}</p>
            <div className="btn">Choose Meal</div>
        </div>
        </div>
    </div>
    );
    return(
        <div className="main_content">{listItems}</div>
    )
}
export default Menu;

// export default function Menu(){
    // const [query, setQuery] = useState("");
    // const [results, setResults] = useState([]);
    
    
    // const handleChange = (e) => {
    //     e.preventDefault();

    //     setQuery(e.target.value)

    //     fetch("https://arcane-dawn-55030.herokuapp.com/menu")
    //     .then((response) => response.json())
    //     .then((data)=> {
    //         if(!data.errors){
    //             setResults(data.results);
    //         } else {
    //             setResults([])
    //         }
    //     })
    // }
    
// const [results, setResults] = useState([]);
// function fetchData(){
//     fetch("https://arcane-dawn-55030.herokuapp.com/menu")
//     .then((response) => response.json())
//     .then(data => {setResults(data)})
// }
// useEffect(() => {
//     fetchData()
// }, []);
// const menuList = results.map(result => )
// console.log(dataArray);

    // return ( 
    //     <div className="Menu">
            {/* <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for food" value={query} onChange={handleChange} />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(result => (
                                <li>
                                    {result.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div> */}
//         </div>
//      );
// }