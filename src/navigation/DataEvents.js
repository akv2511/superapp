import UserInfo from '../components/DataEvents/UserInfo'
import Weather from '../components/DataEvents/Weather' 
import Notes from '../components/DataEvents/Notes'
import News from '../components/DataEvents/News'
import Timer from '../components/DataEvents/Timer'
import { useNavigate } from 'react-router-dom'

const DataEvent = ()=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/Movies')
    }
    return (
        <div style={{height:"100vh",width:"100vw",background:"black",paddingLeft:"3vw",paddingTop:"3vh",boxSizing:"border-box"}}>
        <div style={{display:"flex",gap:"20px"}}>
        <div>
        <UserInfo/>
        <Weather/>
        <Timer/>
        </div>
        <div>
            <Notes/>
        </div>
        <div>
            <News/>
        </div>
        </div>
        <button style={{position:"absolute",bottom:"2vh",right:"3vw",background:"green",border:"none",color:"white",padding:"6px",borderRadius:"12px"}} onClick={handleClick}>Next Page</button> 
        </div>
    )
}

export default DataEvent;