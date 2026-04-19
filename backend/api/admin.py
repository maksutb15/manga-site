from django.contrib import admin
from .models import Manga, Chapter, Comment

admin.site.register(Manga)
admin.site.register(Chapter)
admin.site.register(Comment)