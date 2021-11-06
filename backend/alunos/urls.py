from rest_framework.routers import DefaultRouter

from . import api

router = DefaultRouter()
router.register('alunos', api.views.AlunoViewSet, basename='aluno')

urlpatterns = [
    *router.urls,
]
