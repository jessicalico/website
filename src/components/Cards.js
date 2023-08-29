import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>check out my projects!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='image4.jpeg'
                    text='youtube edits'
                    label='edits'
                    path='https://www.youtube.com/@goldythemoldy'
                    />
                    <CardItem 
                    src='image1.jpeg'
                    text='youtube tutoring'
                    label='lessons'
                    path='https://www.youtube.com/@jessicaaa.'
                    />
                    <CardItem 
                    src='image2.jpeg'
                    text='nutrition team'
                    label='nosh'
                    path='https://linktr.ee/noshteam'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;