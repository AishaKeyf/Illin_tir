import { createClient } from '@supabase/supabase-js'


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_ANNON_KEY
const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true
    },
    realtime: {
        params: {
            eventsPerSecond: 10
        }
    },
})

export default supabase


// export const initSupabase = () => {
//     const supabaseUrl = import.meta.VITE_SUPABASE_URL
//     const supabaseKey = import.meta.VITE_ANNON_KEY
//     return supabase = createClient(supabaseUrl, supabaseKey, {
//         auth: {
//             persistSession: true,
//             autoRefreshToken: true
//         },
//         realtime: {
//             params: {
//                 EventsPerSecond: 10
//             }
//         }
//     })

// }