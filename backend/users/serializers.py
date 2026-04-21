from rest_framework import serializers
from .models import ForumPost, ForumReply, Manga, Genre, Chapter


class ForumReplySerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = ForumReply
        fields = ['id', 'user', 'text', 'created_at']


class ForumPostSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username', read_only=True)
    replies = ForumReplySerializer(many=True, read_only=True)

    class Meta:
        model = ForumPost
        fields = ['id', 'user', 'title', 'text', 'created_at', 'replies']


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'


class MangaSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    chapters = ChapterSerializer(many=True, read_only=True)

    class Meta:
        model = Manga
        fields = '__all__'


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=128)


class CommentSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=500)