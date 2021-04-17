from django.http import JsonResponse


def test_view(request):
    data = {
        'name': 'The Anchor',
        'post_code': 'E14 6HY',
        'street_number': '54',
        'location': {
            'longitude': 127,
            'latitude': 63,
        }
    }
    return JsonResponse(data)
