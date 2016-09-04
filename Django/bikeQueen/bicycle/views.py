from django.shortcuts import render

from .models import bicycle

# Create your views here.
def index(request):
  itens = bicycle.objects.all()
  context = {
    'itens': itens,
  }
  return render(request, 'bicycle/index.html', context)

def create(request):
  return render(request,"bicycle/create.html")

def show(request,id):
  Formulario.objects.get(pk=id)
  return render(request,"bicycle/show.html")