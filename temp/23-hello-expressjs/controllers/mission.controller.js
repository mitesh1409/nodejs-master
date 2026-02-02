function mission(req, res) {
    res.render('mission', {
        title: 'Learn Node.js + Express',
        caption: 'Take ZTM Complete Node.js Developer Course',
    });
}

export { mission };
