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
	return requests.get(comand).json()
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
		requestTM(update)
		invList = requestTM(getInv)['data']
		item = 0
		if len(invList)!=0:
			for item in range(len(invList)):
				classId =  str(invList[item]["i_classid"])
				instanceId = str(invList[item]["i_instanceid"])
				itemName = str(invList[item]['i_market_name'])
				try:
					averageBuyPrice = requestTM(itemHisory())['average']
					requestTM(setPrice(classId,instanceId,averageBuyPrice))
					logging.info('Предмет' + itemName + 'выставлен на продажу')
				except Exception as e:
					averageBuyPrice = "9999999"
					item-=1
				item+=1
	except Exception as e:
		pass
	endTime = str(int(time.time()))
	# автообновление ордеров
	try:
		orderHist = requestTM(operationHistory(startTime,endTime))	
		startTime = str(int(time.time())-5)
		item = 0
		for item in range(len(orderHist['history'])):
			if orderHist['history'][item]["h_event"] == "buy_go":
				classId = orderHist['history'][item]['classid']
				instanceId = orderHist['history'][item]['instanceid']
				price = orderHist['history'][item]['recieved']
				try:
					requestTM(insertOrder(classId,instanceId,price))
				except Exception:
					item -=1
			item += 1
	except:
		pass		

	# пинг
	if time.time() - mainTiming > 180:
		pingReq()
		mainTiming = time.time()
	try:
		orderList = requestTM(getOrders)
		logging.info('Ордери получені успішно')
		
	except Exception :

		logging.error("Оредери не получені")
		continue
	# запрос списка лучших цен
	bestOrderPriceList = [0 for i in range(len(orderList['Orders']))]
	for elem in orderList['Orders']:
		itemPrice = int(orderList['Orders'][i]['o_price'])
		classId = orderList['Orders'][i]['i_classid']
		instanceId = orderList['Orders'][i]['i_instanceid']
		k = False
		try:
			bestOrder = int(requestTM(bestOrderPrice())['best_offer'])
			averageBuyPrice = int(requestTM(itemHisory())['average'])
			secondOffer = int(requestTM(buyOffers())['offers'][1]['o_price'])
			k = True
		except Exception: 
			logging.error("Помилка при отриманні цін")
			continue

		# основная логика бота
		logging.info("——————————————————————————————————————————————————————————————————")
		logging.info("Вешсч: "+orderList['Orders'][i]['i_market_name'])
		logging.info("Наша цена: "+str(itemPrice)+" Ближайший ордер: "+str(bestOrder))
		# понижение ставки
		if itemPrice >= bestOrder:
			logging.info("Ордере номер "+str(i + 1)+" лидирует")
			if  itemPrice - secondOffer > 1:
				logging.info(str(itemPrice)+str(secondOffer))
				selfItemPrice = str(secondOffer+1)
				try:
					requestTM(updateOrder())
					logging.info('-------------Демп произведен успешно-------------')
				except Exception:
					logging.error('!!!!!!!!!!!!!Демп не удалался!!!!!!!!!!!!!')
					k = False
		# повышение ставки
		else:		
			logging.info("Конкуренцияв в "+str(i + 1)+" ордере")
			logging.info("Средняя цена "+str(averageBuyPrice)+" Профитная стоимость "+str(averageBuyPrice - (averageBuyPrice*28/100)))
			if (bestOrder+1) < averageBuyPrice - (averageBuyPrice*26/100):
				selfItemPrice = str(bestOrder+1)
				try:
					requestTM(updateOrder())
					logging.info("-------------перебивка произведена успешно-------------")
				except Exception:
					logging.error('!!!!!!!!!!!!!перебивка не удалась!!!!!!!!!!!!!')
					k = False
		logging.info("——————————————————————————————————————————————————————————————————")
		if k:
			i+=1
			if i>= len(orderList['Orders']):
				i = 0

