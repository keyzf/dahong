var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
app.get('/', function(req, res) {
    request('https://api.leancloud.cn/1.1/classes/Entry?&where=%7B%22%24or%22%3A%5B%7B%22tags%22%3A%7B%22%24in%22%3A%5B%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255d5a3ae00b030964c6c9605%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9ae7e4b00c57d995633d%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255b5ccb800b0bb80c458b8b5%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a385e4b08a686ce5ca69%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22569e7656c24aa80053b56d46%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a23fe4b08a686ce5a7c4%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255ffafb960b249ad60c1f86b%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255d5499140ac87cfa89d3898%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255979f27e4b08a686ce550a6%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a8d5e4b08a686ce64e50%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255cdb52740ac79db3570607f%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225729bce079bc44005cd48388%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255a08deee4b0ed48f06de6d7%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2256d7ac64c4c9710055a98a42%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255c8daed60b2d1400fde7bc7%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555eadc6e4b00c57d9962426%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255cd777160b2ce30a1a43f15%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255d588f360b21fbf2a8ad89d%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255e836ff60b2fb7557a464cf%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255c8535d60b22a3ebde239fa%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255d0cbe900b0de09ab156a7c%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a314e4b08a686ce5be90%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e99f6e4b00c57d9955642%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9acae4b00c57d99561e6%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255e7cc62ddb2dd0023accd0d%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225599f577e4b08a686d142949%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9ae0e4b00c57d99562ee%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9a8de4b00c57d9955eb9%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255d0cb7360b2e3559fd9ed64%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22559b2efbe4b0bd7d53736819%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a2cee4b08a686ce5b7e6%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597b529e4b08a686ce77b57%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255e7ce1a00b0114308832eb4%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255e7d00800b0c86e8e693ef4%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a4b6e4b08a686ce5e860%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225617d88960b2521f49db7220%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22559c82b9e4b0bd7d5385ec64%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255d69a4f60b2719eb43bf7b7%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9af0e4b00c57d99563be%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9a77e4b00c57d9955d64%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9abae4b00c57d9956122%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22563b142860b20bd506b3af5c%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255978433e4b0c4d3e6fddcb1%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9adae4b00c57d99562a4%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555eadbbe4b00c57d99623cc%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255979fe6e4b08a686ce562fe%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255cd843d60b203b0519307a9%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255a872f0e4b05881ac919dfc%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255c1748160b28fd99e49ea68%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22559c814be4b0d4d1b1e9521e%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9abee4b00c57d9956152%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255964d83e4b08a686cc6b353%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555eadc1e4b00c57d9962402%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e99ffe4b00c57d99556aa%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a13de4b08a686ce58b7e%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255e325a100b0ded317d2f846%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%22555e9a98e4b00c57d9955f68%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%2255b9036700b0cecc83240cb7%22%7D%2C%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22Tag%22%2C%22objectId%22%3A%225597a05ae4b08a686ce56f6f%22%7D%5D%7D%7D%2C%7B%22hot%22%3Atrue%7D%5D%7D&include=user&limit=20&order=-rankIndex', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body); //当前的$,它是拿到了整个body的前端选择器
            res.json({
            	'data': $('.photo_pict').length,
            	'img': body
            })
        } else {
            console.log("思密达，没爬取到用户名，再来一次");
        }
    })
});
app.listen(3000);
