import styles from './UpcomingDayDescription.module.css'
import {useEffect} from "react";

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const date = new Date()
let day = date.getDay();

function UpcomingDayDescription({data, index}) {
    const {main: {temp}, weather} = data

    useEffect(() => {
        return function () {
            day = date.getDay()
        }
    }, [day])

    return (
        <li className={styles.weekday}>
            <img src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`} alt="weather icon"/>
            <span className={styles.date}>{weekdays[day = day + index <= 7 ? day + 1 : 0]}</span><br/>
            <span className={styles.temp}>{temp.toFixed(0)}&deg;</span>
        </li>
    )
}

export default UpcomingDayDescription