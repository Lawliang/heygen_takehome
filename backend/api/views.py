from django.shortcuts import render
from django.http import JsonResponse
from .services import simulate_translation_job, create_new_job
from .models import VideoTranslationJob

# Create your views here.

# make a note of using class based views vs function-based views.
# opting for function-based views to keep things simple.

def create_job(request):
    """Create a new translation job and return it's ID"""
    job = create_new_job()
    return JsonResponse({"job_id": job.id})

def get_job_status(request, job_id):
    """Get the status of a specific job based on it's ID"""
    try:
        job = VideoTranslationJob.objects.get(id=job_id)
        status = simulate_translation_job(job)
        return JsonResponse({"result": status})
    except VideoTranslationJob.DoesNotExist:
        return JsonResponse({"error": f"Job was not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": f"Get job status failed - {e}"}, status=404)
    