import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDetails from "../CurrentDayDetails/CurrentDayDetails";
import UpcomingDaysForecast from "../UpcomingDaysForecast/UpcomingDaysForecast";

import styles from './Forecast.module.css'

function Forecast({data}) {
    return (
        <div className={styles.container}>
            <CurrentDay data={data.currentDayData}/>
            <div className={styles.dFlex}>
                <CurrentDayDetails data={data.currentDayData}/>
                <UpcomingDaysForecast data={data.upcomingDaysData}/>
            </div>
        </div>
    )
}

export default Forecast