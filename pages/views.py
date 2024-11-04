from django.shortcuts import render
from django.http import HttpResponse
from products.models import Car


# Create your views here.
def index(requset):
    return render(requset,'pages/index.html' )

def about(requset):
    return render(requset,('pages/about.html') , {'prod':Car.objects.all()})


