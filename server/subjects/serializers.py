from rest_framework import serializers
from .models import Subject


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ("id", "title", "exercise", "solution")
