from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import ForumPost, ForumReply
from .serializers import ForumPostSerializer


@api_view(['POST'])
def register(request):
    User.objects.create_user(
        username=request.data['username'],
        password=request.data['password']
    )

    return Response({'message': 'registered'})


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