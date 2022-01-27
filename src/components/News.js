import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  articles =   [ {
    "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "Oath Keepers founder is ordered detained pending trial in Jan. 6 riot - POLITICO - POLITICO",
    "description": "A federal magistrate judge in Texas says Stewart Rhodes poses a danger to the public.",
    "url": "https://www.politico.com/news/2022/01/26/oath-keepers-founder-detained-jan-6-riot-00002603",
    "urlToImage": null,
    "publishedAt": "2022-01-27T00:45:39Z",
    "content": "In an important acknowledgement of Rhodes significance to another investigation the Jan. 6 select committees probe of the attack on the Capitol Johnson emphasized that Rhodes would be permitted to te… [+4465 chars]"
    }];
    
  constructor(){
    super();
    this.state ={
      articles: this.articles,
      loading:false
    }
  }
  render() {
    return (
    <div className='="container'>
      <div className ="row">
        <div className = "col-md-4">
        <NewsItem title="title" description="description" imageUrl ="imageUrl" newsUrl="newsUrl"/>
        </div>
        <div className = "col-md-4">
        <NewsItem title="title" description="description" imageUrl ="imageUrl" newsUrl="newsUrl"/>
        </div>
        <div className = "col-md-4">
        <NewsItem title="title" description="description" imageUrl ="imageUrl" newsUrl="newsUrl"/>
        </div>
      </div>
    </div>
    );
  }
}
