from django.urls import path
from . import views

urlpatterns = [
    path('create-job/', views.create_job, name="create_job"),
    path('status/<uuid:job_id>/', views.get_job_status, name="get_job_status")
]
