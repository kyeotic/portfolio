import os
import urllib3

http = urllib3.PoolManager()

def handler(event, context):
    r = http.request('GET', os.environ['WATCH_URL'])
    print(r.status)
    return "Success"