from rest_framework.routers import DefaultRouter

from . import api

router = DefaultRouter()
router.register(
    'itens-de-compra',
    api.views.ItemListaCompraViewSet,
    basename='item-de-compra')

urlpatterns = [
    *router.urls,
]
