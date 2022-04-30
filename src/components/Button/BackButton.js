import styles from './Button.module.css'

function BackButton({setIsEntered}) {
    function onClickHandler() {
        setIsEntered(false)
    }

    return (
        <button className={styles.btn} onClick={onClickHandler}>Back to Search</button>
    )
}

export default BackButton