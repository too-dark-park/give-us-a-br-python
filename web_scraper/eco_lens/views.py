from eco_lens.eco_lens_spider import EcoLensSpider
from django.http import JsonResponse


def scrape_webpage(request):
    start_urls = [
        'https://daniellaskinner.github.io/',
        'https://evie-skinner18.github.io/',
    ]
    eco_lens_spider = EcoLensSpider(start_urls)
    data = eco_lens_spider.parse(eco_lens_spider.scrape_response)
    json_data = JsonResponse(data)

    return json_data


scrape_webpage('hello')
