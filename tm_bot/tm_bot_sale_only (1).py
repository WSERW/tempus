import logging
import time
import os
import requests
import json

from datetime import datetime

print('App Working')

logging.basicConfig(filename="market.log", level=logging.INFO)



API_KEY = '6ps2qBkbll4wjfRTTDU8F705G83Zd3K'

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

# бесконечный цикл бота
while True:
	# цикл запросаов на продажу
	try:
		if time.time() - mainTiming > 180:
			requestTM(update)
			mainTiming = time.time()
	
		invList = requestTM(getInv)['data']
		item = 0
		if len(invList)!=0:
			for item in range(len(invList)):
				classId =  str(invList[item]["i_classid"])
				instanceId = str(invList[item]["i_instanceid"])
				itemName = str(invList[item]['i_market_name'])
				try:
					averageBuyPrice = str(requestTM(itemHisory())['average'])
					requestTM(setPrice(classId,instanceId,averageBuyPrice))
					logging.info('Предмет' + itemName + 'выставлен на продажу')
				except Exception as e:
					logging.info(e)
					averageBuyPrice = "9999999"
					item-=1
				item+=1
	except Exception as e:
		pass
	endTime = str(int(time.time()))
	

