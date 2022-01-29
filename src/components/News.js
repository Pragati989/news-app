import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: 8
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number
  }
  constructor(){
    super();
    this.state ={
      articles: [],
      page:1,
      //error in taking props value here
      //pageSize:this.props.pageSize,
      loading:true
    }
  }
   
  loadNews = async() =>{
    this.props.setProgress(10);
    this.setState({
      loading:true
    })
    console.log(this.props.apiKey)
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${this.props.apiKey}`
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading:false
    })
   this.props.setProgress(100);
    console.log(parsedData)
  }

  async componentDidMount(){
    this.loadNews();
  }

  fetchMoreData = async() =>{
    this.setState({
      page: this.state.page + 1
    })
    console.log(this.props.apiKey)
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${this.props.apiKey}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles)
    })
  }

  render() {
    return (
      <>
      {/* Removed the container to remove horizontal bar */}
      <h1 className="text-center ">Top Headlines</h1>
      {this.state.loading && <Spinner/>}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.totalResults !== this.state.articles.length}
          loader={<Spinner/>}
        >
          {/* this container is added for alignment */}
          <div className="container">
                <div className ="row my-4">
                    {!this.state.loading &&  this.state.articles.map((element) =>{
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
}
