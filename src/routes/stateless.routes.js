const express = require('express');
const xml = require('jsontoxml');

const router = express.Router();

const dummyUsersList = [
  {
    id: 81,
    name: 'Satoshi Nakamoto',
    email: 'satoshin@gmx.com',
    rating: 4.8,
    credit: 100,
    currentTimpestamp: Date.now()
  },
  {
    id: 86,
    name: 'Edward Snowden',
    email: 'Ed_Snowden@lavabit.com',
    rating: 4.6,
    credit: 69,
    currentTimpestamp: Date.now()
  },
  {
    id: 82,
    name: 'Vitalik Buterin',
    email: 'vitalik@ethereum.org',
    rating: 4.2,
    credit: 94,
    currentTimpestamp: Date.now()
  },
  {
    id: 88,
    name: 'Mark Zuckerberg',
    email: 'zuckerberg@fb.com',
    rating: 4.1,
    credit: 93,
    currentTimpestamp: Date.now()
  },
  {
    id: 90,
    name: 'Elon Musk',
    email: 'elon@tesla.com',
    rating: 4.1,
    credit: 91,
    currentTimpestamp: Date.now()
  },
];


router.get('/stateless/content_type_example', (req, res) => {
  res.header('Content-Type', 'application/xml');
  return res.status(200).send(xml({ success: true, msg: 'Content type example.', data: dummyUsersList[4] }));
});


router.get('/stateless/status_code_example', (req, res) => res.status(404).json({
  success: false, msg: 'Status code example.', data: { error: 'User not found.' }
}));


router.get('/stateless/header_added_example', (req, res) => {
  res.header('Access-Control-Request-Method', '*');
  return res.status(200).json({ success: true, msg: 'Header added example.', data: dummyUsersList[0] });
});


router.get('/stateless/header_modified_example', (req, res) => {
  res.header('Access-Control-Request-Method', '*');
  return res.status(200).json({ success: true, msg: 'Header modified example.', data: dummyUsersList[0] });
});


router.get('/stateless/header_removed_example', (req, res) => {
  res.header('Access-Control-Request-Method', 'GET');
  return res.status(200).json({ success: true, msg: 'Header removed example.', data: dummyUsersList[0] });
});


router.get('/stateless/key_removed_example', (req, res) => {
  const { rating, ...userProps } = { ...dummyUsersList[3] };
  return res.status(200).json({ success: true, msg: 'Key removed example.', data: userProps });
});


router.get('/stateless/key_added_example', (req, res) => {
  const modifiedUserObj = { ...dummyUsersList[1], phoneNumber: '212 555-1234' };
  return res.status(200).json({ success: true, msg: 'Key added example.', data: modifiedUserObj });
});


router.get('/stateless/value_modified_example', (req, res) => {
  const modifiedUserObj = { ...dummyUsersList[2], credit: null, rating: 0 };
  return res.status(200).json({ success: true, msg: 'Value modified example.', data: modifiedUserObj });
});


router.get('/stateless/array_value_modified_example', (req, res) => {
  const modifiedUsersList = dummyUsersList.map(usr => ({ ...usr, credit: null, rating: 0 }));
  return res.status(200).json({ success: true, msg: 'Array value modified example.', data: modifiedUsersList });
});


router.get('/stateless/array_order_changed_example', (req, res) => {
  const modifiedUsersList = [...dummyUsersList];
  const firstUser = modifiedUsersList.shift();
  modifiedUsersList.push(firstUser);
  return res.status(200).json({ success: true, msg: 'Array order changed example.', data: modifiedUsersList });
});


module.exports = router;
