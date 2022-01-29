import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {
  
   const [articles, setArticles] = useState([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(true);
 
   useEffect(() =>{
    loadNews();
    //eslint-disable-next-line
    }, []);

  const loadNews = async() =>{
    props.setProgress(10);
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${props.apiKey}`
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  }

  const fetchMoreData = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${props.apiKey}`
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    }

    return (
      <>
      {/* Removed the container to remove horizontal bar */}
      <h1 className="text-center">Top Headlines</h1>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.totalResults !== articles.length}
          loader={<Spinner/>}
        >
          {/* this container is added for alignment */}
          <div className="container">
                <div className ="row my-4">
                    {!loading && articles.map((element) =>{
                    return (
                    <div className = "col-md-4" key = {element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl ={element.urlToImage} newsUrl={element.url}
                      author ={element.author} date={element.publishedAt} source ={element.source.name}/>
                    </div>);
                    })}
                </div>
          </div>
      </InfiniteScroll>
    </>
    );
  }

News.defaultProps ={
  pageSize: 8
}

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number
}
