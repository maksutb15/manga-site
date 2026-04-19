from django.urls import path
from .views import logout
from .views import manga_list, MangaDetail, comment_list, login

urlpatterns = [
    path('manga/', manga_list),
    path('manga/<int:pk>/', MangaDetail.as_view()),
    path('comments/', comment_list),
    path('logout/', logout),
    path('login/', login),
]