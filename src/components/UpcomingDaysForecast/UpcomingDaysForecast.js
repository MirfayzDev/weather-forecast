import styles from './UpcomingDaysForecast.module.css'
import UpcomingDayDescription from "./UpcomingDayDescription";

function UpcomingDaysForecast({data}) {
    return (
        <ul className={styles.weekList}>
            {
                data.map((item, index) => <UpcomingDayDescription data={item} index={index} key={index}/>
            )}
        </ul>

    )
}

export default UpcomingDaysForecast