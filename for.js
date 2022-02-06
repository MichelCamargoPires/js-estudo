# faça um programa que mostre uma contagem regressiva para o estouro de fogos de artificios indo de 10 ate 0, com 1 segundo de entre eles 

from time import sleep
for c in range(10, 0, -1):
    sleep(1)
    print(c)
    sleep(1)
print('buww')
