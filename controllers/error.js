exports.get404 = (req, res, next) => {
    res.status(404).render('layouts/404', {title: "Page Not Found"})
}