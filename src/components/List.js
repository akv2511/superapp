import { useEffect, useState } from "react"
import styles from './List.module.css'

const List = ({ userSelect }) => {
    const [movies, setMovies] = useState([])
    console.log(movies)
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6766f59dfemsh6604234e2d7ebe7p1562c7jsn0cdb07938e16',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        const fetchMovies = async () => {
            await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${userSelect}&year=2023`, options)
                .then(response => response.json())
                .then(response => setMovies(response.results.splice(4, 4)))
                .catch(err => console.error(err));
        }
        fetchMovies();
    },[userSelect])


    return (
        <>
            <p className={styles.heading}>{userSelect}</p>
            <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
                {movies.map((movie, idx) => {
                    console.log(movie?.primaryImage?.url)
                    return (
                        <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
                            <img src={movie?.primaryImage?.url} style={{ objectFit: "cover", width: "20vw", height: "20vh", borderRadius: "12px" }} alt='' />
                        </div>

                    )
                })}

            </div>
        </>
    )
}

export default List