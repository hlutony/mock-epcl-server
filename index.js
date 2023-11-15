const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
});

//GC
app.post('/:gc/:route', (req, res) => {
    console.log(`mocking ${req.params.route} response`);
    res.status(502).json({
        message: 'Bad Gateway from epcl mock server.'
    });
});

//EPCL 400 with error
app.post('/:route', (req, res) => {
    console.log(`mocking ${req.params.route} response`);
    console.log({
        httpStatus: '400',
        resBody: {
            message: '123'
        }
    });
    res.status(400).json({
        message: 'Network error from epcl mock server.'
    });
});

// //EPCL 502
// app.post('/:route/1', (req, res) => {
//     console.log(`mocking ${req.params.route} response`);
//     console.log({
//         httpStatus: '502',
//         resBody: {
//             message: 'Network error from epcl mock server.'
//         }
//     });
//     res.status(502).json({
//         message: 'Network error from epcl mock server.'
//     });
// });

// //EPCL 200 with error
// app.post('/:route', (req, res) => {
//     console.log(`mocking ${req.params.route} response`);
//     console.log({
//         httpStatus: '200',
//         resBody: {
//             Message: 'ESB error message from epcl mock server.',
//             ErrorCode: 'ESB error code from epcl mock server.'
//         }
//     });
//     res.status(200).json({
//         Message: 'ESB error message from epcl mock server.',
//         ErrorCode: 'Loyalty Card Number not found'
//     });
// });

// //unkown error
// app.post('/:route/3', (req, res) => {
//     console.log(`mocking ${req.params.route} response`);
//     console.log({
//         httpStatus: '404',
//         resBody: {
//             message: 'unkown error from epcl mock server.'
//         }
//     });
//     res.status(404).json({
//         message: 'unkown error from epcl mock server.'
//     });
// });

app.listen(3030, () => console.log('mock epcl server is listening on port 3030.'));
