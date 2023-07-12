import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author } = this.props;
    return (
      <div className="col">
        <div className="card h-100">
          <img src={imageUrl} className="card-img-top" alt={imageUrl} loading="lazy" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.slice(0, 100)}...</p>
            <div className="text-muted my-2">{author}</div>
          </div>
          <div className="card-footer  p-0">
            <a
              className="btn btn-light d-block text-center p-1"
              href={newsUrl}
              target="_blank"
            >
              Read More
            </a> 
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
