import base64
import os

with open("ul/img2.png", "rb") as f:
    base64_data = base64.b64encode(f.read())
    print(base64_data)