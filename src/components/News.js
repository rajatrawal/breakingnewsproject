import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        'SpaceX launches Starlink satellites into orbit - Associated Press',
      description:
        '(10 Jul 2023) SpaceX has successfully launched a Falcon 9 rocket carrying 22 Starlink satellites into space. (July 10)Subscribe for more Breaking News: http:...',
      url: 'https://www.youtube.com/watch?v=S-BmqEssjsQ',
      urlToImage:
        'https://i.ytimg.com/vi/S-BmqEssjsQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gSCguMA8=&rs=AOn4CLAJ1rTM5tDSXbdUsPXEa7LxZi_GUw',
      publishedAt: '2023-07-10T08:20:05Z',
      content: null,
    },
    {
      source: {
        id: 'the-times-of-india',
        name: 'The Times of India',
      },
      author: 'Sahil Kukreja',
      title:
        'Hyundai Exter launched at Rs 6 lakh: Gets sunroof, paddle shifters, 6 airbags - Indiatimes.com',
      description:
        'Cars News: Hyundai Motor India Ltd (HMIL) is the latest manufacturer set to join the micro SUV segment with the highly-anticipated launch of the Exter that took',
      url: 'https://timesofindia.indiatimes.com/auto/cars/hyundai-exter-launched-at-rs-6-lakh-gets-sunroof-paddle-shifters-6-airbags/articleshow/101625840.cms',
      urlToImage:
        'https://static.toiimg.com/thumb/msid-101631700,width-1070,height-580,imgsize-1105965,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      publishedAt: '2023-07-10T07:23:00Z',
      content:
        'Triumph Speed 400 vs KTM 390 Duke: Engine, power, specs, price compared',
    },
  ];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {this.state.articles.map((element) => {
          return (
            <div>
              <Newsitem
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                author={element.author}
                key={element.url}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
