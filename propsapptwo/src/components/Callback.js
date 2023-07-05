import React, { useCallback } from 'react'


function ProductPage({ productId, referrer, theme }) {
    // Tell React to cache your function between re-renders...
    const handleSubmit = useCallback((orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    }, [productId, referrer]); // ...so as long as these dependencies don't change...
  
    return (
      <div className={theme}>
        {/* ...ShippingForm will receive the same props and can skip re-rendering */}
        <ShippingForm onSubmit={handleSubmit} />
      </div>
    );
  }

export default ProductPage