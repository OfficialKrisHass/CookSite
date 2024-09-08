from django.db import models


class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    likes = models.IntegerField(default=0)
