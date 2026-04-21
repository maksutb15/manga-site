from django.contrib import admin
from .models import (
    Profile,
    ForumPost,
    ForumReply,
    Genre,
    Manga,
    Chapter,
    Favorite
)

admin.site.register(Profile)
admin.site.register(ForumPost)
admin.site.register(ForumReply)

admin.site.register(Genre)
admin.site.register(Manga)
admin.site.register(Chapter)
admin.site.register(Favorite)