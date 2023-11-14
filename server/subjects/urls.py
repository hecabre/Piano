from rest_framework import routers
from .api import ProjectViewSet

router = routers.DefaultRouter()
router.register("api/subjects", ProjectViewSet, "subjects")

urlpatterns = router.urls
