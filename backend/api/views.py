from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from django.shortcuts import get_object_or_404
from .models import Manga, Comment
from .serializers import MangaSerializer, CommentSerializer


# 🔹 Manga LIST + CREATE (FBV)
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def manga_list(request):
    if request.method == 'GET':
        mangas = Manga.objects.all()
        serializer = MangaSerializer(mangas, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = MangaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)


# 🔹 Manga DETAIL (CBV)
class MangaDetail(APIView):
    def get(self, request, pk):
        manga = get_object_or_404(Manga, pk=pk)
        serializer = MangaSerializer(manga)
        return Response(serializer.data)

    def put(self, request, pk):
        manga = get_object_or_404(Manga, pk=pk)
        serializer = MangaSerializer(manga, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        manga = Manga.objects.get(pk=pk)
        manga.delete()
        return Response(status=204)


# 🔹 Comments (FBV)
@api_view(['GET', 'POST'])
def comment_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)


# 🔹 Login (FBV)
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

    return Response({'error': 'Invalid credentials'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        token = Token.objects.get(user=request.user)
        token.delete()
        return Response({'message': 'Logged out'})
    except:
        return Response({'error': 'No token'})