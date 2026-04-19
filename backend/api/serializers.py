from rest_framework import serializers
from .models import Manga, Chapter, Comment


class MangaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manga
        fields = '__all__'
        read_only_fields = ['author']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class SimpleMangaSerializer(serializers.Serializer):
    title = serializers.CharField()
    description = serializers.CharField()