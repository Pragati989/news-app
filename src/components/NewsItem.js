import React, { Component } from 'react';

export default class NewsItem extends Component {

  render() {
    var {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="container">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target ="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
        </div>
    );
  }
}
