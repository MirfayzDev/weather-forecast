import {useCallback, useState} from "react";

const useForecast = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState('')

    const sendRequest = useCallback(async (location) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=6&appid=${process.env.React_App_Weather_Api}&units=metric`)
            if (!response.ok) throw new Error('There is no such city!')
            const data = await response.json()
            setIsLoading(false)
            setError(null)
            return data
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
    }, [])

    const gatherData = async (location) => {
        const data = await sendRequest(location)
        const currentDayData = data
        const upcomingDaysData = data?.list.slice(1)
        setData({upcomingDaysData, currentDayData})
        return {currentDayData, upcomingDaysData}
    }

    const submitRequest = async (location) => {
        await gatherData(location)
    }

    return {
        isLoading,
        error,
        data,
        submitRequest
    }
}

export default useForecast