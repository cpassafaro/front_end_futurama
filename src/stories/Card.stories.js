// MyComponent.story.js
import React from 'react';
import Card from './Card';

export default {
  title: './Card',
  component: Card,
}

export const Basic = () => <Card />;
export const WithProp = () => <Card prop="value" />;
