const { courses } = require('../models/courses')

const coursesReadAll = (req, res) => {
    res.render('list', { courses: courses });
}
const coursesReadHTML = (req, res) => {
    const courseHTML = courses.find(({ name }) => name == 'HTML');
    res.render('detail', { courses: courseHTML });
}
const coursesReadCSS = (req, res) => {
    const courseCSS = courses.find(({ name }) => name == 'CSS')
    res.render('detail', { courses: courseCSS });
}

module.exports = {
    coursesReadAll,
    coursesReadHTML,
    coursesReadCSS,
};