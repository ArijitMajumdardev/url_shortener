const express = require('express')
const {handleGenerateNewShortUrl,handleRedirectUrl} = require('../controllers/url');

const router = express.Router()

router.post('/',handleGenerateNewShortUrl);

router.get('/:id',handleRedirectUrl);

// router.get('/analytics/:id',handleAnalyticsUrl);

 
 

module.exports = router