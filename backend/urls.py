from django.urls import include, path
from rest_framework.routers import DefaultRouter

import alunos.urls
import tarefas.urls
import compras.urls
import app04.urls

api_router = DefaultRouter()
api_router.registry.extend(alunos.urls.router.registry)
api_router.registry.extend(tarefas.urls.router.registry)
api_router.registry.extend(compras.urls.router.registry)

urlpatterns = [
    path('api/', include(api_router.urls)),
    path('api/app04/', include(app04.urls))
]
