import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDetails from "../CurrentDayDetails/CurrentDayDetails";
import UpcomingDaysForecast from "../UpcomingDaysForecast/UpcomingDaysForecast";

import styles from './Forecast.module.css'

function Forecast({data: {currentDayData, upcomingDaysData}}) {
    return (
        <div className={styles.container}>
            <CurrentDay data={currentDayData}/>
            <div className={styles.dFlex}>
                <CurrentDayDetails data={currentDayData}/>
                <UpcomingDaysForecast data={upcomingDaysData}/>
            </div>
        </div>
    )
}

export default Forecast