import React, { useEffect, useState } from 'react'
import TechnologyNews from './news/TechnologyNews';
import BusinessNews from './news/BusinessNews';
import SportsNews from './news/SportsNews';
import Loader from './Loader';

const NewsTab = () => {

    const [technologyNews, setTechnologyNews] = useState([]);
    const [businessNews, setBusinessNews] = useState([]);
    const [sportsNews, setSportsNews] = useState([]);


    // useEffect(() => {
    //     fetch("https://newsapi.org/v2/everything?q=technology&apiKey=638ee0cb7a5d432e8936d744d754dcbe")
    //         .then(res => res.json())
    //         .then(data => {
    //             setTechnologyNews(data?.articles)
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch("https://newsapi.org/v2/everything?q=business&apiKey=638ee0cb7a5d432e8936d744d754dcbe")
    //         .then(res => res.json())
    //         .then(data => {
    //             setBusinessNews(data?.articles)
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch("https://newsapi.org/v2/everything?q=sports&apiKey=638ee0cb7a5d432e8936d744d754dcbe")
    //         .then(res => res.json())
    //         .then(data => {
    //             setSportsNews(data?.articles)
    //         })
    // }, [])

    const apiKey = "638ee0cb7a5d432e8936d744d754dcbe";

useEffect(() => {
    const fetchData = async (category, setter) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`);

            if (!response.ok) {
                throw new Error(`Error fetching ${category} news: ${response.status}`);
            }

            const data = await response.json();
            setter(data.articles || []); 
        } catch (error) {
            console.error(error);
        }
    };

    fetchData("technology", setTechnologyNews);
    fetchData("business", setBusinessNews);
    fetchData("sports", setSportsNews);
}, []);

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 35;
    const lastIndex = currentPage * newsPerPage;
    const firstIndex = lastIndex - newsPerPage;
    const recordsTechnology = technologyNews?.slice(firstIndex, lastIndex);
    const recordsBusiness = businessNews?.slice(firstIndex, lastIndex);
    const recordsSports = sportsNews?.slice(firstIndex, lastIndex);
    const numberOfPagesTechnology = Math.ceil(technologyNews?.length / newsPerPage);
    const numberOfPagesBusiness = Math.ceil(businessNews?.length / newsPerPage);
    const numberOfPagesSports = Math.ceil(sportsNews?.length / newsPerPage);
    // const pagesTechnology = [...Array(numberOfPagesTechnology + 1).keys()].slice(1);
    // const pagesBusiness = [...Array(numberOfPagesBusiness + 1).keys()].slice(1);
    // const pagesSports = [...Array(numberOfPagesSports + 1).keys()].slice(1);

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPageTechnology = () => {
        if (currentPage !== numberOfPagesTechnology) {
            setCurrentPage(currentPage + 1);
        }
    }

    const nextPageBusiness = () => {
        if (currentPage !== numberOfPagesBusiness) {
            setCurrentPage(currentPage + 1);
        }
    }

    const nextPageSports = () => {
        if (currentPage !== numberOfPagesSports) {
            setCurrentPage(currentPage + 1);
        }
    }

    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className='my-[70px]'>

            {/* search work */}
            <div className='mb-[70px] w-5/12 mx-auto'>
                <form>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </form>
            </div>

            <div role="tablist" className="tabs tabs-bordered">

                <input type="radio" name="my_tabs_1" role="tab" className="tab ml-10" aria-label="Technology" defaultChecked />
                <div role="tabpanel" className="mt-10 tab-content p-10">
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
                            {
                                technologyNews?.length === 0 ? <Loader /> : recordsTechnology?.filter((item) => {
                                    if (search == "") {
                                        return item;
                                    } else if (item?.author?.toLowerCase().includes(search?.toLowerCase())) {
                                        return item;
                                    }
                                }).map((news, index) => <TechnologyNews key={index} news={news} />)
                            }
                        </div>
                    </div>

                    {/* pagination technology */}
                    {/* <div className='flex items-center justify-center mt-[70px] gap-3'>
                        <button onClick={prevPage} className='btn btn-sm'>
                            Prev
                        </button>
                        <div>
                            {
                                pagesTechnology?.map((page, index) => <button onClick={() => changeCurrentPage(page)} className={`btn btn-sm mx-3 ${currentPage === page ? 'btn btn-neutral' : ''}`} key={index}>
                                    {page}
                                </button>)
                            }
                        </div>
                        <button onClick={nextPageTechnology} className='btn btn-sm'>
                            Next
                        </button>
                    </div> */}
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Business" />
                <div role="tabpanel" className="mt-10 tab-content p-10">
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
                            {
                                recordsBusiness?.filter((item) => {
                                    if (search == "") {
                                        return item;
                                    } else if (item?.author?.toLowerCase().includes(search?.toLowerCase())) {
                                        return item;
                                    }
                                }).map((news, index) => <BusinessNews key={index} news={news} />)
                            }
                        </div>
                    </div>

                    {/* pagination business */}
                    {/* <div className='flex items-center justify-center mt-[70px] gap-3'>
                        <button onClick={prevPage} className='btn btn-sm'>
                            Prev
                        </button>
                        <div>
                            {
                                pagesBusiness?.map((page, index) => <button onClick={() => changeCurrentPage(page)} className={`btn btn-sm mx-3 ${currentPage === page ? 'btn btn-neutral' : ''}`} key={index}>
                                    {page}
                                </button>)
                            }
                        </div>
                        <button onClick={nextPageBusiness} className='btn btn-sm'>
                            Next
                        </button>
                    </div> */}
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Sports" />
                <div role="tabpanel" className="mt-10 tab-content p-10">
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
                            {
                                recordsSports?.filter((item) => {
                                    if (search == "") {
                                        return item;
                                    } else if (item?.author?.toLowerCase().includes(search?.toLowerCase())) {
                                        return item;
                                    }
                                }).map((news, index) => <SportsNews key={index} news={news} />)
                            }
                        </div>
                    </div>

                    {/* pagination sports */}
                    {/* <div className='flex items-center justify-center mt-[70px] gap-3'>
                        <button onClick={prevPage} className='btn btn-sm'>
                            Prev
                        </button>
                        <div>
                            {
                                pagesSports?.map((page, index) => <button onClick={() => changeCurrentPage(page)} className={`btn btn-sm mx-3 ${currentPage === page ? 'btn btn-neutral' : ''}`} key={index}>
                                    {page}
                                </button>)
                            }
                        </div>
                        <button onClick={nextPageSports} className='btn btn-sm'>
                            Next
                        </button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default NewsTab
