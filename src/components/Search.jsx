import styles from "./Search.module.css";
import {FaSearch} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';

export function Search() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    // useEffect(() => {
    //     setSearchText(search || "");
    // }, [search]);

    // const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        // navigate('/?search='+ searchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} 
                placeholder="Title"
                aria-label="Search Movies"
                type="text" value={search} 
                onChange={(e) => {
                    const value = e.target.value;
                    // setSearchText(search);
                    navigate('/?search='+ value);
                }}/>
                    <FaSearch size={20} color="black" className={styles.searchButton}/>
                
            </div>
        </form>
    )
}
