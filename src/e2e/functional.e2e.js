const puppeteer = require('puppeteer');

const runE2E = async () => {
	const browser = await puppeteer.launch({
		// headless: false,
		// slowMo: 500,
	});
	const page = await browser.newPage();
	await page.setViewport({ width: 1980, height: 1080 });
	await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
	await page.screenshot({ path: 'src/e2e/HomeLoading.png' });
	await page.waitForSelector('.ant-pagination');
	await page.screenshot({ path: 'src/e2e/HomeLoaded.png' });
	await page.click('.ant-pagination-item-2');
	await page.screenshot({ path: 'src/e2e/TestPagination.png' });
	await page.click('.ant-page-header-heading-extra button');
	await page.screenshot({ path: 'src/e2e/TestOrdenation.png' });
	await page.type('.ant-input', 'bul');
	await page.waitFor(50);
	await page.screenshot({ path: 'src/e2e/TestSearch.png' });
	await page.click('.ant-tag');
	await page.waitFor(100);
	await page.screenshot({ path: 'src/e2e/TestCategory.png' });
	await page.click('.ant-card');
	await page.waitForSelector('.title');
	await page.screenshot({ path: 'src/e2e/TestProduct.png' });
	await page.click('.ant-page-header-back');
	await page.waitForSelector('.ant-card');
	await browser.close();
};

runE2E();
