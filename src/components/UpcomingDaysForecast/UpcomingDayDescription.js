import styles from './UpcomingDayDescription.module.css'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const date = new Date()
let day;

function UpcomingDayDescription({data, index}) {
    const {main: {temp}, weather} = data

    // console.log(date.getDay())

    if (date.getDay() >= 6) {
        day = 0
    } else {
        day = date.getDay() + 1
    }

    return (
        <li className={styles.weekday}>
            <img src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`} alt="weather icon"/>
            <span className={styles.date}>{weekdays[day + index]}</span><br/>
            <span className={styles.temp}>{temp.toFixed(0)}&deg;</span>
        </li>
    )
}

export default UpcomingDayDescription