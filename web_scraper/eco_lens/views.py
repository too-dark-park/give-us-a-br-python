from eco_lens.eco_lens_spider import EcoLensSpider

def scrape_webpage(request):
    start_urls = ["evieskinner-18.github.io"]
    eco_lens_spider = EcoLensSpider(start_urls)
    # data = eco_lens_spider.parse()

    return eco_lens_spider.json_test_data
