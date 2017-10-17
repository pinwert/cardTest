import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from '../components/card';
import '../static/index.css';

const data1 = {
  id: 1234,
  title: 'Explore Madrid from the heart',
  sleeps: 3,
  bedrooms: 2,
  bathrooms: 2,
  rating: 4.5,
  reviews: 17,
  price: 54,
  currency: '$',
  images: [
    'https://odis.homeaway.com/odis/listing/db624de2-15b9-4025-8260-9a6717aa3896.c9.jpg'
  ],
  prevThumbnail: action('prevThumbnail'),
  nextThumbnail: action('nextThumbnail'),
};

storiesOf('Card', module)
  .add('Example 1', () => <Card { ...data1 }/>);
