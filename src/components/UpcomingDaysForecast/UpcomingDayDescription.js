import styles from './UpcomingDayDescription.module.css'

function UpcomingDayDescription({data, index}) {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const date = new Date()

    return (
        <li className={styles.weekday}>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="weather icon"/>
            <span className={styles.date}>{weekdays[date.getDay() + index]}</span><br/>
            <span className={styles.temp}>{data.main.temp.toFixed(0)}&deg;</span>
        </li>
    )
}

export default UpcomingDayDescription