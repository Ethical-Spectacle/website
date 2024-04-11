import React, { useEffect, useRef } from 'react';
import '../styles/FadeInParagraph.scss';

const FadeInParagraph = ({ children }) => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    paragraphRef.current.classList.add('fade-in');
  }, []);

  return (
    <p className="fade-in-paragraph" ref={paragraphRef}>
      {children}
    </p>
  );
};

export default FadeInParagraph;