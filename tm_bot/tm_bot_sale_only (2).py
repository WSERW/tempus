import logging
import time
import os
import requests
import json

from datetime import datetime

print('App Working')

logging.basicConfig(filename="market.log", level=logging.INFO)



API_KEY = 'nUXX3btJb8uBQpZEe24WR8Hnp94Cw14'

API_URL_V1 = 'https://market.csgo.com/api/'
API_URL_V2 = 'https://market.csgo.com/api/v2/'

# функция для общих запросов 
def requestTM(comand):
  time.sleep(0)
  answer = requests.get(comand).json()
  return answer
# пинг-запрос(каждые 3 минуты)
def pingReq():
  try:
     requests.get(ping)
  except Exception:
     pingReq()
    
classId = ''
instanceId = ''
# api 1

trades = API_URL_V1 + "Trades/?key="+ API_KEY

getOrders = API_URL_V1 + 'GetOrders?key=' + API_KEY 
selfItemPrice = '0'
sellOffers = API_URL_V1 + 'SellOffers/' + classId + '_' + instanceId + '/?key=' + API_KEY
getInv = API_URL_V1 + 'GetInv/?key=' + API_KEY
def bestSellOffer():
  return API_URL_V1 + 'BestSellOffer/' + classId+'_'+instanceId+ '/?key=' + API_KEY
def bestOrderPrice():
  return API_URL_V1 + 'BestBuyOffer/' + classId+ '_'+ instanceId + '/?key=' + API_KEY
def updateOrder():
  return API_URL_V1 + 'UpdateOrder/' + classId +'/' + instanceId + '/' + selfItemPrice + '/?key=' + API_KEY
def insertOrder(classId,instanceId,price):
  return API_URL_V1 + 'InsertOrder/' + classId +'/' + instanceId +'/' + price + '/?key=' + API_KEY
def itemHisory():
  return API_URL_V1 + 'ItemHistory/' + classId + '_' + instanceId + '/?key=' + API_KEY
def buyOffers():
  return API_URL_V1 + 'BuyOffers/' + classId + '_' + instanceId + '/?key=' + API_KEY
def operationHistory(start_time,end_time):
  return API_URL_V1 + 'OperationHistory/' + start_time + '/' + end_time + '/?key=' + API_KEY
def setPrice(classId,instanceId,price):
  return API_URL_V1 + 'SetPrice/new_' + classId + '_' + instanceId + '/'+ price +'/?key=' + API_KEY
def getListItemsInfo(market_hash_name):
  return API_URL_V2 + 'get-list-items-info?key=' + API_KEY + "&list_hash_name[]=" + market_hash_name 

# api 2
money = API_URL_V2 + 'get-money?key=' + API_KEY
ping = API_URL_V2 + 'ping?key=' + API_KEY
update = API_URL_V2 + 'update-inventory?key=' + API_KEY
items = API_URL_V2 + 'items?key=' + API_KEY
itemId = "18257002034";
inventory = API_URL_V2 + 'my-inventory?key=' + API_KEY
orderHist = API_URL_V1 + 'GetOrdersLog/?key=' + API_KEY 
sale = API_URL_V2 + 'add-to-sale?key=' + API_KEY + '&id=' + itemId + '&price=' + selfItemPrice + '&cur=RUB'

# тайминги для запроса истории покупок
startTime = str(int(time.time())-5000)
mainTiming = time.time()  
i = 0
j= 0
# бесконечный цикл бота
while True:
  # цикл запросаов на продажу
  try:
    if time.time() - mainTiming > 180:
      requestTM(update)
      mainTiming = time.time()
    
    invList = requestTM(getInv)['data']
    item = 0


    tradeList = requestTM(trades)   
    for trade in range(len(tradeList)-1):
      selfTrade = float(tradeList[trade]["ui_price"])
      minTrade = float(tradeList[trade]["min_price"])
      classId =  str(tradeList[trade]["i_classid"])
      instanceId = str(tradeList[trade]["i_instanceid"])
      itemName = str(tradeList[trade]['i_market_name'])
      itemHash = str(tradeList[trade]["i_market_hash_name"])
      priceList = requestTM(getListItemsInfo(itemHash))['data']          
      averageBuyPrice = float(priceList[itemHash]['average'])
      averageBuyPrice *= 110
      if selfTrade <= minTrade and averageBuyPrice <= selfTrade-1:
        print("конкуренция за " + itemName)
        try:
          requestTM(setPrice(classId,instanceId,str(selfTrade-1)))
          print(itemName + "выставлен за " + selfTrade-1)  
        except Exception as e:
          print(e)
          print("калл")
          trade-=1
        trade+=1
      else:
        print("все ок")
      averageBuyPrice = "9999999"

    if len(invList)!=0:
      for item in range(len(invList)):
        classId =  str(invList[item]["i_classid"])
        instanceId = str(invList[item]["i_instanceid"])
        itemName = str(invList[item]['i_market_name'])
        itemHash = str(invList[item]["i_market_hash_name"])

        try:
          priceList = requestTM(getListItemsInfo(itemHash))['data']
          averageBuyPrice = float(priceList[itemHash]['average'])
          averageBuyPrice *= 110
          averageBuyPrice = str(averageBuyPrice)
          time.sleep(10)
          print(requestTM(setPrice(classId,instanceId,averageBuyPrice)))
          print('Предмет' + itemName + 'выставлен на продажу'+ "за " + averageBuyPrice)
        except Exception as e:
          print(e)
          averageBuyPrice = "9999999"
          item-=1
        item+=1
  except Exception as e:
    print(e)
    print("dolbaeb")
    # print(tradeList)
  endTime = str(int(time.time()))
  

