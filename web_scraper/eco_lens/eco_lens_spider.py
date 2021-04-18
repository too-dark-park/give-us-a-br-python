import scrapy
from django.http import JsonResponse


class EcoLensSpider(scrapy.Spider):

    def __init__(self, start_urls):
        self.start_urls = start_urls
        self.scrape_response = {
            'url1': 'toast',
            'url2': '',
        }

    name = 'ecolensspider'

    # def start_requests(self):
    #     for url in self.start_urls:
    #         yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        response['url1'] = 'cheese'
        return response

# trying to add to the dictionary response (scrape_response) what gets returned from the start_requests function
