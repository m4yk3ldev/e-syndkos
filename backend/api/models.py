from django.db import models
from django.contrib.auth.models import AbstractUser


def product_directory_path_imagen(instance, filename):
    return 'product/{0}.jpg'.format(instance.name, filename)


class Category(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def toJSON(self):
        return {
            "id": self.id,
            "name": self.name,
            "is_active": self.is_active,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }


class User(AbstractUser):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    cpe = models.CharField(max_length=10)
    street = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_client = models.BooleanField(default=False)
    is_seller = models.BooleanField(default=False)

    def toJSON(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "username": self.username,
            "cpe": self.cpe,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=product_directory_path_imagen, verbose_name="Image Product")

    def __str__(self):
        return self.name

    def get_seller(self):
        return {
            "name": self.seller.name
        }

    def get_category(self):
        return {
            "name": self.category.name
        }

    def toJSON(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "category": self.category.name,
            "is_active": self.is_active,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }


class Orders(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.product.name

    def toJSON(self):
        return {
            "id": self.id,
            "product": self.product.toJSON(),
            "client": self.client.toJSON(),
            "quantity": self.quantity,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "is_active": self.is_active,
        }
