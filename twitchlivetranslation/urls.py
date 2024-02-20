"""twitchlivetranslation URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include  # Add includefrom 
from twitchlivetranslation.views import index  # Add index
from twitchlivetranslation.views import apirequest_microphone_translated  # Add index
from twitchlivetranslation.views import apirequest_discord_translated  # Add index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),  # Add index path
    path('api/', include('deepl_app.urls')),  
    path('api/translation/mic/', apirequest_microphone_translated),
    path('api/translation/discord/', apirequest_discord_translated),  
]
