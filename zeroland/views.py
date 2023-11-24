from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    template_name = 'zeroland/index.html'

class IndexOneView(TemplateView):
    template_name = 'zeroland/indexone.html'

class IndexTwoView(TemplateView):
    template_name = 'zeroland/indextwo.html'

class IndexThreeView(TemplateView):
    template_name = 'zeroland/indexthree.html'

class IndexFourView(TemplateView):
    template_name = 'zeroland/indexfour.html'

class IndexFiveView(TemplateView):
    template_name = 'zeroland/indexfive.html'           
