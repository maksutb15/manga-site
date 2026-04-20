from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    register,
    forum_posts,
    create_post,
    create_reply,
    delete_post,
    edit_post
)

urlpatterns = [
    path('register/', register),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),

    path('forum/', forum_posts),
    path('forum/create/', create_post),
    path('forum/reply/<int:post_id>/', create_reply),
    path('forum/delete/<int:post_id>/', delete_post),
    path('forum/edit/<int:post_id>/', edit_post),
]