from django.contrib import admin

from api.models import Orders, Product, Category, User

# Register your models here.
admin.site.register(Orders)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(User)
