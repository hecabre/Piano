from .models import User
from rest_framework import permissions, viewsets
from .serializers import UserSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
