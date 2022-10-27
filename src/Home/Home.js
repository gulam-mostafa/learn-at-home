import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import TopicsCard from '../Navbar/TopicsCard/TopicsCard';
import './Home.css'

const Home = () => {
    const allTopics = useLoaderData()
    return (
        <div >
            <h2 className=' text-success  d-flex justify-content-center'>Total Course {allTopics.length}</h2>
            <div  className='grid-item ' >


            {
        allTopics.map(topic => <TopicsCard
        key={topic._id}
        topic={topic}
        ></TopicsCard>)

            },
      
            
            </div>
        </div>
    );
};

export default Home;