export const handleBlur = () => {
  console.log('[blur]');
};
export const handleChange = (change) => {
  console.log('[change]', change);
};
export const handleClick = () => {
  console.log('[click]');
};
export const handleFocus = () => {
  console.log('[focus]');
};
export const handleReady = () => {
  console.log('[ready]');
};

export const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        ...(padding ? {padding} : {}),
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};
