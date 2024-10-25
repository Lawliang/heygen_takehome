import time
import random
from .config import MAX_JOB_DURATION, ERROR_RATE
from .models import VideoTranslationJob

def create_new_job():
    """Creates and stores a new video translation job into the database"""
    job = VideoTranslationJob.objects.create()
    return job

def simulate_translation_job(job):
    """Simulate the video translation job with random delay & chance of erroring."""
    total_time = time.time() - job.start_time.timestamp()

    """Mock Logic for simulating the video translation job status + erroring"""
    if job.status == "pending":
        if random.random() < ERROR_RATE:
            job.status = "error"
        elif total_time > random.randint(30, MAX_JOB_DURATION):
            job.status = "completed"

    job.save()
    return job.status