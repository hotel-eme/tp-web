from django.urls import include, path
from rest_framework.routers import DefaultRouter

import alunos.urls

api_router = DefaultRouter()
api_router.registry.extend(alunos.urls.router.registry)

urlpatterns = [
    path('api/', include(api_router.urls)),
]
