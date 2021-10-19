import Launch from "./Launch";

const Launches = ({ launches, filter }) => {
    return (
        <div>
            <h1 className='text-danger text-center my-2'>Launches</h1>
            <div className='container row m-auto my-5'>
                {filter.length === 0 ? launches.map(launch => <Launch key={launch.id} launch={launch} />) : filter.map(launch => <Launch key={launch.id} launch={launch} />)}
            </div>
        </div>
    );
}

export default Launches;