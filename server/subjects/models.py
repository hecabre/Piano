from django.db import models


# Create your models here.
class Subject(models.Model):
    title = models.CharField(max_length=20)
    exercise = models.TextField()
    solution = models.TextField(max_length=300)
