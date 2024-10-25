from django.http import JsonResponse
import os

class APIKeyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        api_key = request.headers.get('Authorization', '')
        print('api_key:', api_key)
        if api_key != 'Demo123': # for now, as long as the api_key exists, we will authorize the user.
            return JsonResponse({"error": "Invalid or missing API key"}, status=401)
        
        return self.get_response(request)