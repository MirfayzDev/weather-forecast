import styles from './Header.module.css'

function Header() {
    return (
        <h1 className={styles.heading}>
            <span className={styles.light}>Weather</span> Forecast
        </h1>
    )
}

export default Header