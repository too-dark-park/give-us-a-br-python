const puppeteer = require('puppeteer');
var utility = require('./utility');

module.exports = {
  jsCoverage: async function(url) {
    const browser = await puppeteer.launch({
      'args' : [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.newPage();
  
    // Starts to gather coverage information for JS files
    await Promise.all([page.coverage.startJSCoverage()]);
  
    await page.goto(url);
    await page.waitForSelector('title');
  
    // Stops the coverage gathering
    const [jsCoverage] = await Promise.all([
      page.coverage.stopJSCoverage()
    ]);
  

    
    utility.calculateUsedBytes('js', jsCoverage)  
  
    await browser.close();

    //console.log(jsCoverage);
    return jsCoverage;
  }
}
