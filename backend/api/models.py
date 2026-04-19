from django.db import models
from django.contrib.auth.models import User


class Manga(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Chapter(models.Model):
    title = models.CharField(max_length=200)
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Comment(models.Model):
    text = models.TextField()
    manga = models.ForeignKey(Manga, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.text