import logging
import time
import os
import requests
import json
import pyotp
from datetime import datetime


API_KEY = 'db9bf0e8-7fdd-423d-a381-5118ff8ee56d'
API_SECRET = 'PIKLYBTEUZBVX2HZ'
API_URL_V1 = 'https://bitskins.com/api/v1/'
APP_ID = '730'
CODE = pyotp.TOTP(API_SECRET)

def requestBS(comand):
	time.sleep(0)
	return requests.get(comand).json()

market_hash_name = 'StatTrak™ MP5-SD | Gauss (Battle-Scarred)'
def getMarketData():
	return API_URL_V1+'get_price_data_for_items_on_sale/?api_key='+API_KEY+'&code='+str(CODE.now())+'&app_id='+APP_ID
def getMarketByOrders():
	return f"{API_URL_V1}get_market_buy_orders/?api_key={API_KEY}&code={str(CODE.now())}&market_hash_name={market_hash_name}&app_id={APP_ID}"
def createBuyOrder(name,price,quantity):
	name = name
	price = price
	quantity = quantity
	return f"{API_URL_V1}create_buy_order/?api_key={API_KEY}&code={str(CODE.now())}&name={name}&price={price}&quantity={quantity}&app_id={APP_ID}"
itemList = requestBS(getMarketData())
i = 0
newList = []
# 'StatTrak™ M249 | Spectre (Field-Tested)'
maxPerc = 0
maxItem = 0
for item in itemList['data']['items']:
	if item['recent_sales_info'] != None:
		if float(item['recent_sales_info']['average_price']) > 0.40 and float(item['recent_sales_info']['average_price']) < 10:
			if float(item['lowest_price']) > 0.40 and float(item['lowest_price']) < 10:  
				percent = 100 - (float(item['lowest_price'])/float(item['recent_sales_info']['average_price'])*100)
				if percent > 20:
					newList.append(item)
					if percent > maxPerc:
						maxPerc = percent
						maxItem = item
print(maxItem)
print(len(newList))
for item in newList:
	market_hash_name = item['market_hash_name']
	lowestPrice = float(item['lowest_price'])
	try:
		order = requestBS(getMarketByOrders())
		orderPrice  = float(order["data"]["orders"][0]['price'])
	except Exception as e:
		print(e)
		print(order)	
	profitPerc = 100 - orderPrice/lowestPrice*100
	if profitPerc > 15:
		item['profit_perc'] = profitPerc
		print(market_hash_name,profitPerc)
	else:
		del item
sorted(newList, key=lambda perc: perc['profit_perc'])
print(newList)
vremia = time.time()
# orderList = requestBS(getMarketByOrders)["data"]["orders"]
xyemia = time.time()-vremia
# print(xyemia)
# for order in orderList:
# 	print(order)
time.sleep(9990)