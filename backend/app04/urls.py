from rest_framework.routers import DefaultRouter

from . import api

router = DefaultRouter()
router.register('clientes', api.views.ClienteViewSet, basename='cliente')

urlpatterns = [
    *router.urls,
]
