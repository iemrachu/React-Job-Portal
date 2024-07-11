import React from 'react';
import Hero from '../components/Hero';
import JobListings from '../components/JobListings';
import HomeCards from '../components/HomeCards';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings isHome={true}/>
            <ViewAllJobs />
        </>
    )
}

export default HomePage