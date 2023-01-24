const express = require('express');

const router = express.Router();

router.get('/standard', async (req, res) => {
  // Do not change standard route code block.
  await new Promise(resolve => setTimeout(resolve, 100));
  return res.status(200).json({
    success: true,
    msg: 'Standard route response.',
    data: {
      id: 1,
      type: 'Standard',
      path: req.originalUrl,
      headers: req.headers
    }
  });
});

router.get('/delayed', async (req, res) => {
  // TODO: Increase time in timeout function when changing in your branch.
  await new Promise(resolve => setTimeout(resolve, 1000));
  return res.status(200).json({
    success: true,
    msg: 'Delayed route response.',
    data: {
      id: 2,
      type: 'Delayed',
      path: req.originalUrl,
      headers: req.headers
    }
  });
});

router.get('/boosted', async (req, res) => {
  // TODO: Decrease time in timeout function when changing in your branch.
  await new Promise(resolve => setTimeout(resolve, 3000));
  return res.status(200).json({
    success: true,
    msg: 'Boosted route response.',
    data: {
      id: 3,
      type: 'Boosted',
      path: req.originalUrl,
      headers: req.headers
    }
  });
});


module.exports = router;
