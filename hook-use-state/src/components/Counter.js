import { useState}  from "react";

function Counter() {
    const [job,setJob] = useState('')
    const [jobs,setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storageJobs
    })

    const handleAdd = () => {
        setJobs(prev => {
            const newJobs = [...prev,job]

            // save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }

    return (
        <div className="">
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleAdd} >Add</button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}> {job}</li>
            ))}
            </ul>
        </div>
    )


}
export default Counter;