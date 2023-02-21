from rest_framework import serializers

from api.models import Category, Product, Orders


# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price', 'category',
                  'created_at', 'updated_at', 'is_active', 'seller']
        read_only_fields = ['created_at', 'updated_at']


class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['product', 'client', 'quantity', 'is_active']
        read_only_fields = ['created_at', 'updated_at']
