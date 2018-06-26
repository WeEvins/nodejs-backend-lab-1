const rp = require('request-promise');
let dataPath = path.join(__dirname, '..popular_articles.json');
let redditArray = [];


request('hhtp://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    return JSON.parse(body).data.children.forEach(item => {
        redditArray.map(item.data.title, item.data.author, item.data.url)
        fs.writeFileSync(JSON.stringify(redditArray))
    });
});

