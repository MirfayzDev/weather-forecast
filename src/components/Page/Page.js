import {Fragment} from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import useForecast from "../../hooks/use-forecast";
import Forecast from "../Forecast/Forecast";

import styles from './Page.module.css'
import Loader from "../Loader/Loader";

function Page() {
    const {submitRequest, isLoading, data} = useForecast()
    return (
        <Fragment>
            <Header/>
            <div className={styles.container}>
                {!data.currentDayData && !isLoading && <Form submitRequest={submitRequest}/>}
                {data.currentDayData && !isLoading && <Forecast data={data}/>}
                {isLoading && <Loader/>}
            </div>
        </Fragment>
    )
}

export default Page