import styles from './supimg.module.css'
import Banner from '../assets/page1_bg.png'
function Supimg() {
    return (<>
        <div className={styles.bottom}>
            <p>Discover new things on SuperApp</p>
        </div>
        <img src={Banner} alt='somthing not good'/>
    </>
    )
}
export default Supimg;