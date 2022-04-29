import styles from './UpcomingDayDescription.module.css'

function UpcomingDayDescription({data, index}) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const date = new Date()
    let day;
    if (date.getDay() >= 6) {
        day = 0
    }

    return (
        <li className={styles.weekday}>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon"/>
            <span className={styles.date}>{weekdays[day + index]}</span><br/>
            <span className={styles.temp}>{data.main.temp.toFixed(0)}&deg;</span>
        </li>
    )
}

export default UpcomingDayDescription