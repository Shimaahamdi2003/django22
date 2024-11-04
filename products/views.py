from django.shortcuts import render
from products.models import Car
# Create your views here.

def product(request):
    return render(request ,'products/about.html',{'pro:Car.objects.all()'})