from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField("Name", max_length=100)
    second_name = models.CharField("Second name", max_length=100)

    def __str__(self):
        return f"{self.name} {self.second_name}"
