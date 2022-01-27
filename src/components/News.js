import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
 
  constructor(){
    super();
    this.state ={
      articles: []
    }
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=5bc5913fdccc4770b3e5d63ff89baa08"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles
    })
  }

  render() {
    return (
    <div className="container">
      <h1 className="text-center ">Top Headlines</h1>
      <div className ="row my-4">
        {this.state.articles.map((element) =>{
          return (<div className = "col-md-4" key = {element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl ={element.urlToImage} newsUrl={element.url}/>
          </div>);
        })}
      </div>
    </div>
    );
  }
}
