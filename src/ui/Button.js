import styles from './Button.module.css'

function Button({children, onClickHandler}) {
    return (
        <button type={'submit'} className={styles.btn} onClick={onClickHandler || (() => {})}>
            {children}
        </button>
    )
}

export default Button