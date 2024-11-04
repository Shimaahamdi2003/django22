from django.db import models

# Create your models here.
class Car(models.Model):
    name = models.CharField(max_length=100)
    price= models.DecimalField(max_digits=20,decimal_places=5)
    comment= models.TextField()
    active = models.BooleanField(default=True)
    
   