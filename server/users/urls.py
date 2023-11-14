from rest_framework import routers
from .api import ProjectViewSet

router = routers.DefaultRouter()
router.register("api/users", ProjectViewSet, "users")

urlpatterns = router.urls
