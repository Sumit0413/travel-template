/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

document.body.innerHTML = html;

test('navbar exists', () => {
  expect(document.querySelector('.navbar')).not.toBeNull();
});

test('hero exists', () => {
  expect(document.querySelector('.hero')).not.toBeNull();
});

test('at least 1 destination', () => {
  const cards = document.querySelectorAll('.destination-card');
  expect(cards.length).toBeGreaterThan(0);
});

test('booking button exists', () => {
  expect(document.querySelector('.book-btn')).not.toBeNull();
});

test('footer exists', () => {
  expect(document.querySelector('.footer')).not.toBeNull();
});