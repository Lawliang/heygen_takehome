import uuid
from django.db import models

# Create your models here.

class VideoTranslationJob(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status = models.CharField(max_length=20, default="pending")
    start_time = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Job {self.id} - Status: {self.status}"