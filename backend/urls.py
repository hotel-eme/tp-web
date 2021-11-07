from django.urls import include, path
from rest_framework.routers import DefaultRouter

import alunos.urls
import tarefas.urls

api_router = DefaultRouter()
api_router.registry.extend(alunos.urls.router.registry)
api_router.registry.extend(tarefas.urls.router.registry)

urlpatterns = [
    path('api/', include(api_router.urls)),
]
