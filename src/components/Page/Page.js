import {Fragment, useState} from "react";

import Header from "../Header/Header";
import Form from "../Form/Form";
import useForecast from "../../hooks/use-forecast";
import Forecast from "../Forecast/Forecast";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import BackButton from "../Button/BackButton";

import styles from './Page.module.css'

function Page() {
    const {submitRequest, isLoading, error, data} = useForecast()
    const [isEntered, setIsEntered] = useState(false)

    return (
        <Fragment>
            <Header/>
            <div className={styles.container}>
                    {
                        isLoading ?
                            (<Loader/>) :
                            data.currentDayData && isEntered?
                                (<Forecast data={data}/>) :
                                (<Form setIsEntered={setIsEntered} submitRequest={submitRequest}/>)
                    }
            </div>
            <div className={styles.error}>
                {error && !isLoading && <Error message={error}/>}
                {!error && isEntered && <BackButton setIsEntered={setIsEntered}/>}
            </div>
        </Fragment>
    )
}

export default Page