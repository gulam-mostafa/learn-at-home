import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
const [category , setCategory] = useState([]);

    useEffect(()=>{
        fetch('https://online-courser-server-data.vercel.app/course-categories')
        .then(res=>res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div className=''>
            <h2>Total Category {category.length}</h2>
            <div>
                {
                    category.map(category=> <p key={category.id}>
                        <Link to={`rightside/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSide;