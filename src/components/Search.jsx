import { useState } from "react";

function Search(props){
    const [search, setSearch] = useState("");
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
export default Search;