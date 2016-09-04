from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import bicycle

# Create your views here.
def index(request):
  itens = bicycle.objects.all()
  context = {
    'itens': itens,
  }
  return render(request, 'bicycle/index.html', context)

def new(request):
  return render(request,'bicycle/new.html')

def delete(request, id):
  bicycle.objects.get(pk=id).delete()
  return HttpResponseRedirect('/bicycle')

def create(request):
  post = request.POST
  id = post.get('id', '')
  if id != '':
    bike = bicycle.objects.get(pk=id)
  else:
    bike = bicycle()
  bike.producer = post.get('producer', '')
  bike.model = post.get('model', '')
  bike.color = post.get('color', '')
  bike.gear = post.get('gear', '')
  bike.markExchange = post.get('markExchange', '')

  bike.own = post.get('own', '')
  bike.cellPhone = post.get('cellPhone', '')
  bike.email = post.get('email', '')

  bike.save()
  return HttpResponseRedirect('/bicycle')

def edit(request, id):
  bike = bicycle.objects.get(pk=id)
  context = {
    'bike': bike,
    'id': id,
  }
  return render(request, 'bicycle/new.html', context=context)

def show(request, id):
  bike = bicycle.objects.get(pk=id)
  context = {
    'bike': bike,
    'id': id,
  }
  return render(request, 'bicycle/show.html', context=context)