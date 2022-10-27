import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    useTitle("Categories");
    return (
        <div>
            <h2>This category has {categoryNews.length} news.</h2>
            {
                categoryNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;