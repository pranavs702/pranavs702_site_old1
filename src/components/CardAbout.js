import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardAbout() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="ABOUT ME:"
              label='Me after a MUN Conference.'
              path='/contact'
            />
            
          </ul>
          <ul className='description'>
            <h6>
                My name is Pranav Kumar and I am a student at the University of Wisconsin-Madison
                studying Computer Science. I am intersted in Computational Biology, Machine Learning,
                Math, Physics, and Biology. In my free time, I enjoy playing badminton, reading about
                my fields of interest, taking online courses, playing video games and creating cool
                apps. I'm looking forward to learning more by participating in research and internships!
            </h6>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardAbout;