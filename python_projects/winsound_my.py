import winsound
from random import randint
from time import sleep
MAX_FREQUENCY = 2500
MAX_DURATION = 1000
def complition_beep():
   for i in range(3):
    winsound.Beep(900, 100)
for i in range(4):
    winsound.Beep(600, 100)
    sleep(5)
