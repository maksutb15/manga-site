from rest_framework import serializers
from .models import ForumPost, ForumReply


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