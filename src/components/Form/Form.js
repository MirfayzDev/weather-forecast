import {useState} from "react";
import Button from "../../ui/Button";

import styles from "./Form.module.css";

function Form({submitRequest, onClickHandler}) {
    const [locationValue, setLocationValue] = useState('')

    const onSubmitHandler =  event => {
        event.preventDefault()
        if (!locationValue || locationValue.trim().length <= 0) return
        submitRequest(locationValue)
        onClickHandler()
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
            <Button>Search</Button>
        </form>
    )
}

export default Form