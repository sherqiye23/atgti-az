const NotFoundPage = () => {
    return (
        <div className='mt-[220px]'>
            <div className='h-[35vh] flex items-center justify-center bg-[#6C7CD0] p-2'>
                <h1 className='text-white font-bold text-2xl xs:text-4xl md:text-6xl'>Page not found</h1>
            </div>
            <div className='h-[35vh] container flex justify-center flex-col px-2 py-[100px]'>
                <div className="text-gray-600">It looks like nothing was found at this location. Maybe try a search?</div>
                <div className='flex flex-col gap-2 sm:flex-row sm:gap-5 mt-5'>
                    <input type="text" placeholder="Search..."
                    className="w-full text-white rounded-md p-2 border border-solid border-[#cccccc] bg-[#f4f6f7e4]"/>
                    <button className="text-white font-bold rounded-md bg-[var(--base-text-color)] px-5 py-3">SEARCH</button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage