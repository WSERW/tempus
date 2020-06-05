# import pusherclient as pusher
# import json
# import time
# import sys
# import logging

# global pusher_client

# root = logging.getLogger()
# root.setLevel(logging.INFO)
# ch = logging.StreamHandler(sys.stdout)
# root.addHandler(ch)

# def connect_handler(data):
#     channel = pusher_client.subscribe('inventory_changes')
#     channel.bind('listed', callback=get_info)

# def get_info(data):
#     print(json.dumps(data, separators=(',', ':')))

# userData = {
#         'secure': True,
#         'wsPort': 443,
#         'wssPort': 443,
#         'host': 'notifier.bitskins.com',
# }
# pusher_client = pusher.Pusher('c0eef4118084f8164bec65e6253bf195', userData)
# pusher_client.connection.bind('connected', connect_handler)


# pusher_client.connect()

# while True:
#     time.sleep(1)

import pusherclient
import json
import logging
pusher = pusherclient.Pusher('c0eef4118084f8164bec65e6253bf195', port=443)
def ok():
  print('Connected')
  logging.info('Connected')

def let(data):
  print('got info' + json.dumps(data, separators=(',', ':')))


pusher.connection.bind('connected', ok)

event_channel = pusher.subscribe('inventory_changes')
event_channel.bind('extra_info', callback=let)  # Что мне нужно передать??