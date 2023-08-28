import List from "../components/List"
import Profile from '../assets/profileSmall.png'
import { useNavigate } from 'react-router-dom'
const Movies = ()=>{
    const movies = JSON.parse(window.localStorage.getItem("userSelect"))
    const navigate = useNavigate()
    
    const handleClick = ()=>{           
        navigate('/Choose_Category')              
    }
    
    return(
        <>
        <div>
        <img src={Profile} style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px"}} alt=""/>
        <div style={{width:"100vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
        <p style={{color:"green",fontSize:"3rem",margin:"1vw",fontWeight: "400px", fontFamily: 'Single Day'}}>Super app</p>
        <p style={{color:"white",fontSize:"2rem",margin:"3vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List userSelect={movie}/>)}
       
        <div >
        
            <button style={{left:"93vw",position:"relative",backgroundColor:"green",color:"white",borderRadius:"12px",bottom:"1vh",border:"none",padding:"12px"}} onClick={handleClick} >Catagory</button>
            
            </div>
        </div>
        </div>
        </>
    )
}


export default Movies