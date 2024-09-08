from django.http import JsonResponse

from .models import Recipe


def recipes(request):
    items = list(Recipe.objects.values("id", "title", "likes"))
    return JsonResponse({"items": items})
