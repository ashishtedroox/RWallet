import React from 'react';

const EyeDisabledIcon: React.FC<any> = ({ width, height }) => {
  const w = width || '16';
  const h = height || '16';
  return (
    <>
      <svg
        width={w}
        height={h}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9213 12.8647C10.7488 13.6084 9.38848 14.0022 7.99999 14C4.40532 14 1.41466 11.4133 0.787323 8C1.07401 6.44714 1.85508 5.0286 3.01399 3.956L0.92799 1.872L1.87132 0.928665L15.0707 14.1287L14.1273 15.0713L11.9207 12.8647H11.9213ZM3.95666 4.9C3.05066 5.72373 2.41953 6.80585 2.14866 8C2.35685 8.91097 2.77483 9.76076 3.36932 10.4817C3.96382 11.2027 4.71841 11.7749 5.57302 12.1529C6.42764 12.5308 7.35869 12.704 8.29205 12.6588C9.22541 12.6135 10.1353 12.3509 10.9493 11.892L9.59732 10.54C9.02178 10.9025 8.34012 11.0587 7.66415 10.983C6.98817 10.9072 6.35802 10.6039 5.87704 10.123C5.39606 9.64197 5.09281 9.01182 5.01703 8.33584C4.94125 7.65987 5.09745 6.97821 5.45999 6.40267L3.95666 4.9ZM8.60932 9.552L6.44799 7.39067C6.32937 7.69262 6.30145 8.02264 6.36766 8.34023C6.43387 8.65782 6.59133 8.94919 6.82074 9.17859C7.05014 9.40799 7.3415 9.56545 7.65909 9.63166C7.97669 9.69787 8.3067 9.66996 8.60866 9.55133L8.60932 9.552ZM13.8713 11.0613L12.9173 10.108C13.363 9.47287 13.6803 8.75679 13.8513 8C13.6701 7.20648 13.3295 6.4581 12.8501 5.80033C12.3707 5.14256 11.7625 4.58915 11.0626 4.17373C10.3626 3.75832 9.58552 3.48958 8.77848 3.38384C7.97144 3.27811 7.15133 3.33758 6.36799 3.55867L5.31599 2.50667C6.14732 2.18 7.05332 2 7.99999 2C11.5947 2 14.5853 4.58667 15.2127 8C15.0084 9.11047 14.5492 10.1584 13.8713 11.0613ZM7.81532 5.00533C8.23966 4.97911 8.66473 5.04338 9.06235 5.19388C9.45997 5.34438 9.82106 5.57767 10.1217 5.8783C10.4223 6.17893 10.6556 6.54002 10.8061 6.93764C10.9566 7.33526 11.0209 7.76033 10.9947 8.18467L7.81466 5.00533H7.81532Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export { EyeDisabledIcon };