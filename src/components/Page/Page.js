import {Fragment, useState} from "react";

import Header from "../Header/Header";
import Form from "../Form/Form";
import useForecast from "../../hooks/use-forecast";
import Forecast from "../Forecast/Forecast";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Button from "../../ui/Button";

import styles from './Page.module.css'

function Page() {
    const {submitRequest, isLoading, error, data} = useForecast()
    const [isEntered, setIsEntered] = useState(false)

    const onClickHandlerBack = () => {
        setIsEntered(false)
    }

    const onClickHandlerSearch = () => {
        setIsEntered(true)
    }

    return (
        <Fragment>
            <Header/>
            <div className={styles.container}>
                {
                    isLoading ?
                        (<Loader/>) :
                        data.currentDayData && isEntered ?
                            (<Forecast data={data}/>) :
                            (<Form onClickHandler={onClickHandlerSearch} submitRequest={submitRequest}/>)
                }
            </div>
            <div className={styles.error}>
                {error && <Error message={error}/>}
                {!error && !isLoading && isEntered && <Button onClickHandler={onClickHandlerBack}>
                    Back to Search
                </Button>}
            </div>
        </Fragment>
    )
}

export default Page