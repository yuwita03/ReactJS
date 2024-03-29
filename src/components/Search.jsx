import { useState } from "react";

const [search, setSearch] = useState("");
function Search(props){
    const onSearchChange = (event) =>{
        setSearch(event.target.value);
        props.onSearchChange(event.target.value)
    };
    return (
        <>
            <div>Cari Artikle: <input onChange={onSearchChange}></input></div>
            <small>Ditemukan 0 data{search}</small>

        </>
    )
}
export default Search