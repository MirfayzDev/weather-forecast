import {useState} from "react";

import styles from "./Form.module.css";

function Form({submitRequest, setIsEntered}) {
    const [locationValue, setLocationValue] = useState('')

    const onSubmitHandler =  event => {
        event.preventDefault()
        if (!locationValue || locationValue.trim().length <= 0) return
        submitRequest(locationValue)
        setIsEntered(true)
    }

    const onChangeHandler = event => {
        setLocationValue(event.target.value)
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input type="text"
                   onChange={onChangeHandler}
                   value={locationValue}
                   className={styles.input}
                   required
                   placeholder={'Search for location'}/>
            <button type={"submit"} className={styles.btn}>Search</button>
        </form>
    )
}

export default Form