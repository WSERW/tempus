import logging
import time
import os
import requests
import json
import pyotp
import winsound
import re

from datetime import datetime

# мой апи 'db9bf0e8-7fdd-423d-a381-5118ff8ee56d'
# мой секрет 'PIKLYBTEUZBVX2HZ'
API_KEY = 'd3753ae9-487a-4686-935a-755cec1bd90b'
API_SECRET = '7EJOF4FPSLG7O34P'
API_URL_V1 = 'https://bitskins.com/api/v1/'
APP_ID = '730'
CODE = pyotp.TOTP(API_SECRET)
print(CODE.now())
def complition_beep():
    for i in range(3):
        winsound.Beep(900, 100)
    
def working_beep():
    winsound.Beep(600, 100)
    
def requestBS(comand):
    time.sleep(0)
    return requests.get(comand).json()

market_hash_name = ''
def getMarketData():
    return API_URL_V1+'get_price_data_for_items_on_sale/?api_key='+API_KEY+'&code='+str(CODE.now())+'&app_id='+APP_ID
def getMarketByOrders():
    return f"{API_URL_V1}get_market_buy_orders/?api_key={API_KEY}&code={str(CODE.now())}&market_hash_name={market_hash_name}&app_id={APP_ID}"
def createBuyOrder(name,price,quantity):
    return f"{API_URL_V1}create_buy_order/?api_key={API_KEY}&code={str(CODE.now())}&name={name}&price={price}&quantity={quantity}&app_id={APP_ID}"
itemList = requestBS(getMarketData())
i = 0
newList = []
# 'StatTrak™ M249 | Spectre (Field-Tested)'
maxPerc = 0
maxItem = 0
for item in itemList['data']['items']:
    if item['recent_sales_info'] != None:
        if float(item['recent_sales_info']['average_price']) > 0.80 and float(item['recent_sales_info']['average_price']) < 3:
            if float(item['lowest_price']) > 0.80 and float(item['lowest_price']) < 3:  
                percent = 100 - (float(item['lowest_price'])/float(item['recent_sales_info']['average_price'])*100)
                if percent > 15:
                    newList.append(item)
                    if percent > maxPerc:
                        maxPerc = percent
                        maxItem = item
print(maxItem)
print(len(newList))
i = 0
finalList = []
passingPerc = 10
f = True
govno = ['Sticker','Patch','Souvenir','Case','Agent','Key','Capsule','Graffiti','Romanov','StatTrack™','Pin','SCAR']
for item in newList:
    f = True
    for kall in govno:
        jopa = re.compile(kall)
        match = re.search(jopa,item['market_hash_name'])
        if match:
            f = False;      
    if not f:
        continue
    market_hash_name = item['market_hash_name']
    lowestPrice = float(item['lowest_price'])
    try:
        order = requestBS(getMarketByOrders())
        orderPrice = float(order["data"]["orders"][0]['price'])
    except Exception as e:
        print(e)
        print(order)    
    profitPerc = 100 - orderPrice/lowestPrice*100
    if profitPerc > passingPerc:
        item['profit_perc'] = profitPerc
        print(market_hash_name,profitPerc)
        finalList.append(item)
    else:
        del newList[i]
    # working_beep()
finalList = sorted(finalList, key=lambda perc: -perc['profit_perc'])

# finalList = [{'market_hash_name': 'PP-Bizon | Fuel Rod (Factory New)', 'total_items': 10, 'lowest_price': '3.34', 'highest_price': '280.00', 'cumulative_price': '342.06', 'recent_sales_info': {'hours': '0.24', 'average_price': '4.27'}, 'updated_at': 1590236399, 'profit_perc': 68.26347305389221}]
for item in finalList:
    name = item['market_hash_name']
    price = float(item['lowest_price'])-float(item['lowest_price'])*item['profit_perc']/100+0.01
    quantity = 1
    print(f'Покупаемname {quantity}x {name} за {price}?(да/нет)')
    confirm = "да"
    if confirm == "да":
        requestBS(createBuyOrder(name,price,quantity))


complition_beep()