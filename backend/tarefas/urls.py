from rest_framework.routers import DefaultRouter

from . import api

router = DefaultRouter()
router.register('tarefas', api.views.TarefaViewSet, basename='tarefa')

urlpatterns = [
    *router.urls,
]
