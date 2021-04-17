import scrapy
from django.http import JsonResponse


class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        urls = [
            'https://daniellaskinner.github.io/',
            'https://evie-skinner18.github.io/',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f'quotes-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'Saved file {filename}')

# class EcoLensSpider(scrapy.Spider):
#     name = 'ecolensspider'
#     start_urls = ['https://www.zyte.com/blog/']
#
#     # def parse(self, response):
#     #     for title in response.css('.oxy-post-title'):
#     #         yield {'title': title.css('::text').get()}
#
#     #     for next_page in response.css('a.next'):
#     #         yield response.follow(next_page, self.parse)
#
#     def parse(self, response):
#          jsonresponse = JsonResponse(response.text)
#
#          return jsonresponse
