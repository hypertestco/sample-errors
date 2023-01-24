const express = require('express');
const xml = require('jsontoxml');

const router = express.Router();

const isCandidateBranch = process.env.HYPER_TEST_BRANCH !== 'primary'; // Do not change this line.
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
    credit: 96,
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


router.get('/content_type_example', (req, res) => {
  if (isCandidateBranch) {
    res.header('Content-Type', 'application/xml');
    return res.status(400).send(xml({ success: true, msg: 'Content type example.', data: dummyUsersList[4] }));
  }
  return res.status(200).json({
    success: true,
    msg: 'Content type example.',
    data: dummyUsersList[4]
  });
});


router.get('/status_code_example', (req, res) => {
  if (isCandidateBranch) {
    return res.status(404).json({ success: false, msg: 'Status code example.', data: { error: 'User not found.' } });
  }
  return res.status(200).json({ success: true, msg: 'Status code example.', data: dummyUsersList[0] });
});


router.get('/header_added_example', (req, res) => {
  if (isCandidateBranch) res.header('Access-Control-Request-Method', '*');
  return res.status(200).json({ success: true, msg: 'Header added example.', data: dummyUsersList[0] });
});


router.get('/header_modified_example', (req, res) => {
  if (isCandidateBranch) res.header('Access-Control-Request-Method', '*');
  else res.header('Access-Control-Request-Method', 'GET');
  return res.status(200).json({ success: true, msg: 'Header modified example.', data: dummyUsersList[0] });
});


router.get('/header_removed_example', (req, res) => {
  if (!isCandidateBranch) res.header('Access-Control-Request-Method', 'GET');
  return res.status(200).json({ success: true, msg: 'Header removed example.', data: dummyUsersList[0] });
});


router.get('/key_removed_example', (req, res) => {
  if (isCandidateBranch) {
    const { rating, ...userProps } = { ...dummyUsersList[3] };
    return res.status(200).json({ success: true, msg: 'Key removed example.', data: userProps });
  }
  return res.status(200).json({ success: true, msg: 'Key removed example.', data: dummyUsersList[3] });
});


router.get('/key_added_example', (req, res) => {
  if (isCandidateBranch) {
    const modifiedUserObj = { ...dummyUsersList[1], phoneNumber: '212 555-1234' };
    return res.status(200).json({ success: true, msg: 'Key added example.', data: modifiedUserObj });
  }
  return res.status(200).json({ success: true, msg: 'Key added example.', data: dummyUsersList[1] });
});


router.get('/value_modified_example', (req, res) => {
  if (isCandidateBranch) {
    const modifiedUserObj = { ...dummyUsersList[2], credit: null, rating: 0 };
    return res.status(200).json({ success: true, msg: 'Value modified example.', data: modifiedUserObj });
  }
  return res.status(200).json({ success: true, msg: 'Value modified example.', data: dummyUsersList[2] });
});


router.get('/array_value_modified_example', (req, res) => {
  if (isCandidateBranch) {
    const modifiedUsersList = dummyUsersList.map(usr => ({ ...usr, credit: null, rating: 0 }));
    return res.status(200).json({ success: true, msg: 'Array value modified example.', data: modifiedUsersList });
  }
  return res.status(200).json({ success: true, msg: 'Array value modified example.', data: dummyUsersList });
});


router.get('/array_order_changed_example', (req, res) => {
  if (isCandidateBranch) {
    const modifiedUsersList = [...dummyUsersList];
    const firstUser = modifiedUsersList.shift();
    modifiedUsersList.push(firstUser);
    return res.status(200).json({ success: true, msg: 'Array order changed example.', data: modifiedUsersList });
  }
  return res.status(200).json({ success: true, msg: 'Array order changed example.', data: dummyUsersList });
});


module.exports = router;
