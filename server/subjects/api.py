from .models import Subject
from rest_framework import permissions, viewsets
from .serializers import ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProjectSerializer
