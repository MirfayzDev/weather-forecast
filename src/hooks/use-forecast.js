import {useCallback, useState} from "react";

const useForecast = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState('')

    const myKey = 'b0fbc53d9b5bf83339f92ed398c62519'

    const sendRequest = useCallback(async (location) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=6&appid=${myKey}&units=metric`)
            if (!response.ok) throw new Error('Something went wrong!')
            setIsLoading(true)
            const data = await response.json()
            if (!data || data.length === 0) {
                setError('There is no such location!')
                return
            }
            return data
        } catch (error) {
            setError(error)
        }
    }, [])

    const getCurrentDayData = async (location) => {
        const data = await sendRequest(location)
        return data
    }

    const getUpcomingDays = async (location) => {
        const data = await sendRequest(location)
        const upcomingDaysData = data.list.slice(1)
        return upcomingDaysData
    }

    const gatherData = async (location) => {
        const currentDayData = await getCurrentDayData(location)
        const upcomingDaysData = await getUpcomingDays(location)
        setData({upcomingDaysData, currentDayData})
        return {currentDayData, upcomingDaysData}
    }

    const submitRequest = async (location) => {
        await gatherData(location)
        setError(null)
        setIsLoading(false)
    }

    return {
        isLoading,
        error,
        data,
        submitRequest
    }
}

export default useForecast