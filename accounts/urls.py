from django.urls import path
from accounts import views


urlpatterns =[
    
    path( 'signin' , views.signin , name='signin' ),
]