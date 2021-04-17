import scrapy
from django.http import JsonResponse


class EcoLensSpider(scrapy.Spider):

    def __init__(self, start_urls):
        self.start_urls = start_urls
        
    name = 'ecolensspider'
    test_data = {
        'name': 'The Anchor',
        'post_code': 'E14 6HY',
        'street_number': '54',
        'location': {
            'longitude': 127,
             'latitude': 63,
            }
        }
    json_test_data = JsonResponse(test_data)

    # def parse(self, response):
    #     for title in response.css('.oxy-post-title'):
    #         yield {'title': title.css('::text').get()}

    #     for next_page in response.css('a.next'):
    #         yield response.follow(next_page, self.parse)

    def parse(self, response):
         jsonresponse = JsonResponse(response.text)             

         return jsonresponse
