const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

let chirpArray = [
    {
        title: 'title1',
        author: 'author1',
        message:'message1'

    },
    {
        title: 'title2',
        author: 'author2',
        message:'message2'

    },
    {
        title: 'title3',
        author: 'author3',
        message:'message3'

    },
    {
        title: 'title4',
        author: 'author4',
        message:'message4'

    },
    {
        title: 'title5',
        author: 'author5',
        message:'message5'

    }
];

fs.writeFile(
    './chirpArray.json',
    JSON.stringify(chirpArray),
    
    function (err) {
        if (err) {
            console.log(err)
        } 
    }
);