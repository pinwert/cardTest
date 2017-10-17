import React from 'react';

function getRatingObj(value) {
  if(value === 5) return { className: 'superlative', comment: 'Exceptional!'};
  if(value > 4.5) return { className: 'superlative', comment: 'Wonderful!' };
  if(value > 4) return { className: 'superlative', comment: 'Excellent!' };
  if(value === 4) return { className: 'superlative', comment: 'Very Good!' };
  return null;
}

export default function Info({ id, title, sleeps, bedrooms, bathrooms, rating, reviews, price, currency }) {
  const ratingObj = getRatingObj(rating);
  return (
    <div className="simple-hit__info-block">
      <h4 className="hit-headline">
        <a href={`/vacation-rental/${ id }`} target="_blank">{ title }</a>
      </h4>
      <ul className="accommodations">
        <li className="accommodation">
          <h5 className="label">Sleeps</h5>
          <span className="count">{ sleeps }</span>
        </li>
        <li className="accommodation">
          <h5 className="label label-desktop">bedrooms</h5>
          <h5 className="label label-mobile">beds</h5>
          <span className="count">{ bedrooms }</span>
        </li>
        <li className="accommodation">
          <h5 className="label">bathroom</h5>
          <span className="count">{ bathrooms }</span>
        </li>
      </ul>
      <div className="hit-rating">
        <div className={ ratingObj && ratingObj.className }>
          { ratingObj && <span className="comment">{ ratingObj.comment }</span> }
          <span className="numeric">{ rating }/5</span>
        </div>
        <div className="price-overlay">
          <h4 className="rate"><span className="currency">{ currency }</span>{ price }</h4>
          <div className="period">avg/night</div>
        </div>
      </div>
      <div className="rating-content">
        <div className="rating rating-4-5"/>
        <span className="review-count">{ reviews } reviews</span>
      </div>
    </div>
  );
}
