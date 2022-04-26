import styles from './CurrentDayDetails.module.css'

function CurrentDayDetails({data}) {
    return (
        <div className={styles.container}>
            <div className={styles.dFlex}>
                <p>Humidity</p>
                <span> {data.list[0].main.humidity}%</span>
            </div>
            <div className={styles.dFlex}>
                <p>Wind</p>
                <span>{data.list[0].wind.speed} km/h</span>
            </div>
            <div className={styles.dFlex}>
                <p>Air pressure</p>
                <span>{data.list[0].main.pressure} mb</span>
            </div>
            <div className={styles.dFlex}>
                <p>Max temp</p>
                <span>{data.list[0].main.temp_max.toFixed(0)} &deg;C</span>
            </div>
            <div className={styles.dFlex}>
                <p>Min temp</p>
                <span>{data.list[0].main.temp_min.toFixed(0)} &deg;C</span>
            </div>
        </div>
    )
}

export default CurrentDayDetails