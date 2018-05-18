import React from 'react';
import './explore.scss';

import ExploreNavigation from './ExploreNavigation';
import Image from '../Image';

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
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 5,
      },
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 6,
      },
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 7,
      },
      {
        imgUrl: 'https://i.pinimg.com/736x/d2/4e/d5/d24ed55ffc88deee28a50d6a53156691--mr-bean-funny-lil-wayne.jpg',
        imgAlt: 'Mr. Bean',
        title: 'Gansta Bean',
        author: 'Peter',
        description: 'In a Galaxy far far away there was a vicious Bean ...',
        id: 8,
      },
    ];

    const images = imagesMock.map(image => {
      return (
        <div key={image.id}>
          <Image
            imgUrl={image.imgUrl}
            imgAlt={image.imgAlt}
            title={image.title}
            author={image.author}
            description={image.description}
          />
        </div>
      );
    });

    return (
      <div className="explore">
        <ExploreNavigation />
        <div className="images-wrapper">
          { images }
        </div>
      </div>
    );
  }
}

export default Explore;
