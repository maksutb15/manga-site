from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import ForumPost, ForumReply, Manga, Genre
from .serializers import (
    ForumPostSerializer,
    MangaSerializer,
    GenreSerializer
)


# ---------- AUTH ----------

@api_view(['POST'])
def register(request):
    User.objects.create_user(
        username=request.data['username'],
        password=request.data['password']
    )
    return Response({'message': 'registered'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    return Response({'message': 'logged out'})


# ---------- FORUM ----------

@api_view(['GET'])
def forum_posts(request):
    posts = ForumPost.objects.all().order_by('-created_at')
    serializer = ForumPostSerializer(posts, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request):
    ForumPost.objects.create(
        user=request.user,
        title=request.data['title'],
        text=request.data['text']
    )
    return Response({'message': 'created'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reply(request, post_id):
    post = ForumPost.objects.get(id=post_id)

    ForumReply.objects.create(
        post=post,
        user=request.user,
        text=request.data['text']
    )

    return Response({'message': 'reply added'})


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_post(request, post_id):
    post = ForumPost.objects.get(id=post_id)

    if post.user != request.user:
        return Response({'error': 'Not allowed'}, status=403)

    post.delete()
    return Response({'message': 'deleted'})


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_post(request, post_id):
    post = ForumPost.objects.get(id=post_id)

    if post.user != request.user:
        return Response({'error': 'Not allowed'}, status=403)

    post.title = request.data['title']
    post.text = request.data['text']
    post.save()

    return Response({'message': 'updated'})


# ---------- MANGA API ----------

@api_view(['GET'])
def manga_list(request):
    mangas = Manga.objects.all()
    serializer = MangaSerializer(mangas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def manga_detail(request, slug):
    manga = Manga.objects.get(slug=slug)
    serializer = MangaSerializer(manga)
    return Response(serializer.data)


@api_view(['GET'])
def genre_list(request):
    genres = Genre.objects.all()
    serializer = GenreSerializer(genres, many=True)
    return Response(serializer.data)


class MangaListView(APIView):

    def get(self, request):
        mangas = Manga.objects.all()
        serializer = MangaSerializer(mangas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GenreListView(APIView):

    def get(self, request):
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
