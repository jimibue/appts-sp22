
import useAxiosOnMount from '../hooks/useAxiosOnMount'

const Patients = ()=>{
    const {response, loading, error} = useAxiosOnMount('/api/patients')
    
    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    return (
        <div>
            <h1>Response</h1>
            <p>{JSON.stringify(response)}</p>
            <h1>Patients</h1>
            <p>{JSON.stringify(response.data)}</p>
        </div>
    )
}

export default Patients