import time
import requests
import re
import json

from tm_bot_V1_1 import requestTM,insertOrder

API_KEY = '6ps2qBkbll4wjfRTTDU8F705G83Zd3K'

API_URL_V1 = 'https://market.csgo.com/api/'
API_URL_V2 = 'https://market.csgo.com/api/v2/'


govno = ['Sticker','Patch','Souvenir','Case','Agent','Key','Capsule','Graffiti','Romanov']
f = True
newList = []
itemDict = (requests.get('https://market.csgo.com/api/v2/prices/class_instance/RUB.json')).json()['items']

for skin in itemDict:
    low = 10    #150
    top = 11      #2000
    price_xyuc = float(itemDict[skin]['price'])
    if itemDict[skin]['popularity_7d']:
        popularity_7d = float(itemDict[skin]['popularity_7d'])
    else:
        continue
    avg_price = itemDict[skin]['avg_price']
    if price_xyuc < 150:
        popularity = 50
    else:
        popularity = 100
    if low <= price_xyuc <= top and avg_price != None and popularity_7d > popularity:
        for kall in govno:
            jopa = re.compile(kall)
            if re.search(jopa,itemDict[skin]['market_hash_name']):
                f = False
        if f:            
            newList.append(itemDict[skin])
            newList[len(newList)-1]['class_instance'] = skin
        f = True
i = 0

while i < len(newList):
    ohuel = newList[i]['buy_order']/float(newList[i]['avg_price'])*100
    if  ohuel < 70:
        print('ohuel?', float(newList[i]['avg_price']) - newList[i]['buy_order'])
        print(newList[i]['ru_name'],newList[i]['avg_price'],newList[i]['buy_order'])
        print(newList[i]['class_instance'])
        classId = newList[i]['class_instance'].split('_')[0]
        intenseId = newList[i]['class_instance'].split('_')[1]
        price = str(float(newList[i]['buy_order'])*100+1)
        
        try:
            print(f"{newList[i]['ru_name']} покупается за {float(price)/100}")
            requestTM(insertOrder(classId,intenseId,price))
        except Exception as identifier:
            print(identifier)
        i+=1
    else:
        del newList[i]
print(len(newList))
with open("tm_bot/xyu.json", "w", encoding="utf-8") as file:
    json.dump(newList, file, indent=4, ensure_ascii=False)
print('pidoras')

with open('tm_bot/xyu.json', encoding="utf-8") as f:
    templates = json.load(f)
print(templates[0]['price'])
time.sleep(20)

