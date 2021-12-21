const express = require('express');
const router = express.Router();

const crtlCourses = require('../controllers/index');
router
    .route('/')
    .get(crtlCourses.coursesReadAll);

router
    .route('/HTML')
    .get(crtlCourses.coursesReadHTML);

router
    .route('/CSS')
    .get(crtlCourses.coursesReadCSS);

module.exports = router;