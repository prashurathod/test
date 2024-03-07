const axios = require('axios');
const cheerio = require('cheerio');  
const { select } = require('cheerio-select');

async function scrapeSite() {
	const url = `https://www.time.com`;
	const { data } = await axios.get(url);
	const $ = cheerio.load(data);  

	const results = [];
	$('.latest-stories__item').each((i, elem) => {
		const title = $(elem).find('h3').text();
        const txt = $(elem).find('a').attr('href');
        const link = `https://www.time.com${txt}`;
		results.push( {title , link} );
	});


	return results;
}



scrapeSite().then(result => {

    console.log(result);
       
    }).catch(err => console.log(err));