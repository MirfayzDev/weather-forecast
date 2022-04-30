import styles from './CurrentDayDetails.module.css'

function CurrentDayDetails({data}) {
    const {main: {humidity, pressure, temp_max, temp_min}, wind: {speed}} = data?.list[0]

    const arrayDescription = [
        {
            title: 'Humidity',
            value: humidity,
            unit: '%'
        },
        {
            title: 'Wind',
            value: speed,
            unit: 'km/h'
        },
        {
            title: 'Pressure',
            value: pressure,
            unit: 'mb'
        },
        {
            title: 'Max Temp',
            value: temp_max.toFixed(0),
            unit: '℃'
        },
        {
            title: 'Min Temp',
            value: temp_min.toFixed(0),
            unit: '℃'
        }
    ]

    return (
        <div className={styles.container}>
            {
                arrayDescription.map(item => <div key={item.title} className={styles.dFlex}>
                    <p>{item.title}</p>
                    <span>{item.value} {item.unit}</span>
                </div>)
            }
        </div>
    )
}

export default CurrentDayDetails