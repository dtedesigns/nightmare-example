var Nightmare = require('nightmare');

new Nightmare()
    .goto('http://yahoo.com')
    .type('input[title="Search"]', 'github nightmare')
    .click('.searchsubmit')
    .screenshot('test.png')
    .run(function(err, nightmare) {
        console.log('done');
    });
