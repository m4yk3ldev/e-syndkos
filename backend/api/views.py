# Create your views here.
from django.http import FileResponse, HttpResponseForbidden
from django.views.generic.base import View
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from config import settings
from .models import Category, Product, Orders
from .serializers import CategorySerializer, ProductSerializer, OrdersSerializer


class GetImagenProduct(View):

    def get(self, request, *args, **kwargs):
        imagen_path = self.kwargs['name']
        try:
            absolute_path = '{}/product/{}'.format(settings.MEDIA_ROOT, imagen_path)
            response = FileResponse(open(absolute_path, 'rb'), as_attachment=True)
            return response
        except Exception as e:
            print(str(e))
            return HttpResponseForbidden()


# Category Viewsets
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(is_active__exact=True)

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        if self.request.user.is_authenticated and (self.request.user.is_seller or self.request.user.is_superuser):
            return super(CategoryViewSet, self).create(request, *args, **kwargs)
        return Response({"error": "Forbidden"}, status=status.HTTP_403_FORBIDDEN)

    def update(self, request, *args, **kwargs):
        if self.request.user.is_authenticated and (self.request.user.is_seller or self.request.user.is_superuser):
            return super(CategoryViewSet, self).update(request, *args, **kwargs)
        return Response({"error": "Forbidden"}, status=status.HTTP_403_FORBIDDEN)


# Product Viewsets
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        if self.request.user.is_authenticated and (self.request.user.is_seller or self.request.user.is_superuser):
            return super(ProductViewSet, self).create(request, *args, **kwargs)
        return Response({"error": "Forbidden"}, status=status.HTTP_403_FORBIDDEN)

    def update(self, request, *args, **kwargs):
        if self.request.user.is_authenticated and (self.request.user.is_seller or self.request.user.is_superuser):
            return super(ProductViewSet, self).update(request, *args, **kwargs)
        return Response({"error": "Forbidden"}, status=status.HTTP_403_FORBIDDEN)


# Order ViewSets
class OrdersViewSet(viewsets.ModelViewSet):
    serializer_class = OrdersSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_authenticated and (self.request.user.is_seller or self.request.user.is_superuser):
            return Orders.objects.all()
        return Orders.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        if self.request.user.is_authenticated and (
                self.request.user.is_seller() or self.request.user.is_superuser or self.request.user.is_client):
            return super(OrdersViewSet, self).create(request, *args, **kwargs)
        return Response({"error": "Forbidden"}, status=status.HTTP_403_FORBIDDEN)

    def update(self, request, *args, **kwargs):
        if self.request.user.is_authenticated and (
                self.request.user.is_seller or self.request.user.is_superuser or self.request.user.is_client):
            return super(OrdersViewSet, self).update(request, *args, **kwargs)
        return Response({"error": "Forbidden"}, status=status.HTTP_403_FORBIDDEN)
