import React, { Component } from 'react';

export default class NewsItem extends Component {

  render() {
    var {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="container">
        <div className="card">
          <div style ={{display: 'flex', right:'0', justifyContent:'flex-end'}}>
              <span className="position-absolute badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target ="__blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
        </div>
    );
  }
}
