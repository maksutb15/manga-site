from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import (
    register,
    logout,
    forum_posts,
    create_post,
    create_reply,
    delete_post,
    edit_post,
    manga_list,
    manga_detail,
    genre_list,
    MangaListView,
    GenreListView,
)

urlpatterns = [
    # AUTH
    path('register/', register),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('logout/', logout),

    # FORUM
    path('forum/', forum_posts),
    path('forum/create/', create_post),
    path('forum/reply/<int:post_id>/', create_reply),
    path('forum/delete/<int:post_id>/', delete_post),
    path('forum/edit/<int:post_id>/', edit_post),

    # MANGA API
    path('manga/', MangaListView.as_view()),
    path('manga/<slug:slug>/', manga_detail),
    path('genres/', GenreListView.as_view()),
]
