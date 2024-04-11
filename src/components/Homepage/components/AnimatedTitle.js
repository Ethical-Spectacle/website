import React, { useEffect, useRef } from 'react';
import '../styles/AnimatedTitle.scss';

const AnimatedTitle = ({ text }) => {
  const wordsRef = useRef([]);

  useEffect(() => {
    wordsRef.current.forEach((word, index) => {
      word.style.animation = `slideUp 0.5s ease-in-out forwards ${index * 0.1}s`;
    });
  }, []);

  const splitWords = (text) => {
    return text.split(/\s+/).map((word, index) => {
      if (word === '<br/>') {
        return <br key={index} />;
      }
      return (
        <span
          key={index}
          className="word"
          ref={(el) => (wordsRef.current[index] = el)}
        >
          {word}
        </span>
      );
    });
  };

  return <h1 className="animated-title">{splitWords(text)}</h1>;
};

export default AnimatedTitle;