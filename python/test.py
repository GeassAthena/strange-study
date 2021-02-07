import os

str = '哈哈'
str1 = b'哈哈'
print(len(str))
print(len(str1))
f1 = open('f1', 'w')
f1.write(str)
f1.close()
f2 = open('f2', 'wb')
f2.write(str1)
f2.close()
