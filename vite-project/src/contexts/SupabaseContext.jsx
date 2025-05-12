import { createContext, useEffect, useState } from 'react'
import supabase from '@/lib/supabase'

export const supabaseContext = createContext()



export const SupabaseProvider = ({ children }) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [fetchError, setFetchError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            const { data, error } = await supabase.from('baafin').select('*')

            try {
                console.log(data)

                if (data) {
                    setLoading(false)
                    setData(data)
                    setFetchError(null)

                }
            } catch (error) {
                setFetchError("there's fetching error: ", error)
                setMissingPeaple(null)

                console.log(error)
            } finally {
                setLoading(false)
            }

            console.log(data)

        }
        fetchData()
    }, [])
    return (
        <supabaseContext.Provider value={{ data, loading, fetchError }}>
            {children}
        </supabaseContext.Provider>
    )
}
