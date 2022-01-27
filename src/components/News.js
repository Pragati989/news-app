import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
  
  constructor(){
    super();
    this.state ={
      articles: [],
      page:1,
      pageSize:25,
      totalResults:0,
      loading:true
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=5bc5913fdccc4770b3e5d63ff89baa08`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })
  }

  handlePreviousClick = async() => {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page-1}&pageSize=${this.state.pageSize}&apiKey=5bc5913fdccc4770b3e5d63ff89baa08`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page-1,
      loading:false
    })
  }

   handleNextClick = async() =>{
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page-1}&pageSize=${this.state.pageSize}&apiKey=5bc5913fdccc4770b3e5d63ff89baa08`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page+1,
      loading:false
    })
  }

  render() {
    return (
      <>
    <div className="container">
      <h1 className="text-center ">Top Headlines</h1>
      {this.state.loading && <Spinner/>}
      <div className ="row my-4">
        {!this.state.loading &&  this.state.articles.map((element) =>{
          return (<div className = "col-md-4" key = {element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl ={element.urlToImage} newsUrl={element.url}/>
          </div>);
        })}
      </div>
    </div>
    <div className="container d-flex justify-content-between">
      <button disabled={this.state.page ===1}type="button" className="btn btn-dark" onClick ={this.handlePreviousClick}>Previous</button>
      <button disabled={this.state.page === Math.ceil(this.state.page.totalResults/this.state.pageSize)} type="button" className="btn btn-dark" onClick ={this.handleNextClick}>Next</button>
    </div>
    </>
    );
  }
}
