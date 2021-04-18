const puppeteer = require('puppeteer');
var utility = require('./utility');

module.exports = {
  cssCoverage: async function(url) {
    const browser = await puppeteer.launch({
      'args' : [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.newPage();
  
    // Starts to gather coverage information for CSS files
    await Promise.all([page.coverage.startCSSCoverage()]);
  
    await page.goto(url);
    await page.waitForSelector('title');
  
    // Stops the coverage gathering
    const [cssCoverage] = await Promise.all([
      page.coverage.stopCSSCoverage()
    ]);

    utility.calculateUsedBytes('css', cssCoverage)  
  
    await browser.close();

    return cssCoverage;
  }
}
