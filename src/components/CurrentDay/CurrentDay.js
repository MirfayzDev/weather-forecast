import styles from './CurrentDay.module.css'

function CurrentDay({data}) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const month = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date()

    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <div>
                    <div className={styles.day}>{weekdays[date.getDay()]}</div>
                    <div className={styles.date}>{month[date.getMonth()] + ' ' + date.getDate()}</div>
                    <div className={styles.dFlex}>
                        <svg height="48" className={styles.icon} viewBox="0 0 48 48" width="48"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                            <path d="M0 0h48v48H0z" fill="none"/>
                        </svg>
                        <div className={styles.location}>{data.city.name}</div>
                    </div>
                </div>
                <div>
                    <div className={styles.temp}>{Number(data.list[0].main.temp).toFixed(0)} &#xb0;C</div>
                    <div className={styles.condition}>{data.list[0].weather[0].description}</div>
                </div>
            </div>
        </div>
    )
}

export default CurrentDay