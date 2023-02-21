from django.urls import path, include
from rest_framework import routers
from api.views import CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()
router.register('api/category', CategoryViewSet, 'category')
router.register('api/product', ProductViewSet, 'product')
router.register('api/order', ProductViewSet, 'order')
urlpatterns = [
    path('', include(router.urls)),
]
