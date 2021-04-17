from eco_lens.eco_lens_spider import EcoLensSpider

def scrape_webpage(request):
    start_urls = [
            'https://daniellaskinner.github.io/',
            'https://evie-skinner18.github.io/',
        ]
    eco_lens_spider = EcoLensSpider(start_urls)
    data = eco_lens_spider.start_requests()

    return data
