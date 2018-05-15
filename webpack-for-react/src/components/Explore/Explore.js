import React from 'react';
import './explore.scss';

import ExploreNavigation from './ExploreNavigation';
import ImagesGrid from '../ImagesGrid';

class Explore extends React.Component {
  render() {

    const imagesMock = [
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 1,
      },
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 2,
      },
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 3,
      },
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 4,
      },
    ];
    const images = imagesMock.map(image => {
      return (
        <div key={image.id}>
          <ImagesGrid
            imgUrl={image.imgUrl}
            imgAlt={image.imgAlt}
            title={image.title}
            author={image.author}
            description={image.description}
          />
        </div>
      );
    })
    return (
      <div className="explore">
        <ExploreNavigation />
        { images }
      </div>
    );
  }
}

export default Explore;
