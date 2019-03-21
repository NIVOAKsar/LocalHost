
/* ----- DEPENDENCIES -----*/
const userService = require('../services/userService.js');

/* ----- CONSTANTS -----*/
const BASE = '/user';

// function checkAdmin(req, res, next) {
//     console.log('INSIDE MIDDLEWARE: ', req.session.user);
//     if (!req.session.user || !req.session.user.isAdmin) {
//         res.status(401).end('Unauthorized');
//         return;
//     }
//     next();
// }

function addRoutes(app) {

    // GET LIST
    app.get(BASE, (req, res) => {
        const query = req.query;
        userService.query(query).then(users => res.json(users))
    })
    app.get(`${BASE}/:id`, (req, res) => {
        const userId = req.params.id
        console.log(userId);

        userService.getById(userId)
            .then(user => {
                console.log(user);
                return res.json(user)
            });
    })

    // app.post('/signup', (req, res) => {
    //     const credentials = req.body;
    //     userService.addUser(credentials)
    //         .then(user => res.json(user))
    // })

    // app.put('/login', (req, res) => {
    //     console.log('here');
    //     console.log(req.body);
    //     const credentials = req.body;
    //     userService.checkLogin(credentials)
    //         .then(user => {
    //             if (!user) res.status(401).send('Something broke!');
    //             req.session.user = user
    //             res.json(user)
    //         })
    // })

}

module.exports = addRoutes;




// function addtoyRoutes(app) {

//     // GET LIST
//     app.get('/toy', (req, res) => {
//         const query = req.query;
//         console.log(query);
//         toyService.query(query).then(toys => res.json(toys))

//     })

//     // GET SINGLE
//     app.get('/toy/:toyId', (req, res) => {
//         const toyId = req.params.toyId
//         toyService.getById(toyId).then(toy => res.json(toy))
//     })

//     // ADD
//     app.post('/toy', (req, res) => {
//         const toy = req.body;
//         toyService.add(toy).then(toy => res.json(toy))
//     })

//     // DELETE
//     app.delete('/toy/:toyId', (req, res) => {
//         const toyId = req.params.toyId;
//         toyService.remove(toyId).then(() => res.end(`toy ${toyId} Deleted `))
//     })

//     // UPDATE
//     app.put('/toy/:toyId', (req, res) => {
//         const toy = req.body;
//         toyService.update(toy).then(toy => res.json(toy));
//     })

// }


// module.exports = addtoyRoutes;