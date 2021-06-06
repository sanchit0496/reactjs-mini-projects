import React, {useState} from 'react';
import data from './data.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = data[index];

    const checkNumber = (index) => {
        if(index > data.length -1){
            return 0
        }
        if(index < 0){
            return data.length -1
        }
        return index;
    }

    const nextReview = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }

    const prevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    const randomReview = () => {
        let randomNumber = Math.floor(Math.random() * data.length)
        if(randomNumber === index){
            return index + 1;
        }
        setIndex(checkNumber(randomNumber))
    }


    return (
        <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn' onClick = {prevReview}>
              <FaChevronLeft />
            </button>
            <button className='next-btn' onClick = {nextReview}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn' onClick = {randomReview}>
            surprise me
          </button>
        </article>
      );

}

export default Review;