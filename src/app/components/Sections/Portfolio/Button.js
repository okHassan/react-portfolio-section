import React, { useState } from 'react';
const Button = ({ data, dataType }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonHandler = (type, index) => {
    dataType(type);
    setActiveIndex(index);
  };
  return (
    <>
      {data?.map((btn, index) => (
        <button
          key={btn?.type}
          onClick={() => buttonHandler(btn.type, index)}
          className="text-white text-center hover:text-[#67DB52] hover:font-medium hover:underline decoration-2 underline-offset-8 transition duration-300 tracking-widest mb-3"
          style={
            index === activeIndex
              ? {
                  textDecorationLine: 'underline',
                  color: '#67db52',
                  fontWeight: 500,
                }
              : null
          }
        >
          {btn?.name}
        </button>
      ))}
    </>
  );
};

export default Button;
