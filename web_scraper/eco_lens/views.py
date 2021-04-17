from eco_lens.eco_lens_spider import EcoLensSpider
from django.http import JsonResponse

def scrape_webpage(request):
    start_urls = [
            'https://daniellaskinner.github.io/',
            'https://evie-skinner18.github.io/',
        ]
    eco_lens_spider = EcoLensSpider(start_urls)
    eco_lens_spider.start_requests()
    data = JsonResponse(eco_lens_spider.scrape_response)

    return data
