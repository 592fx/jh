'''
视客集抓Authorization填入变量skj多号#隔开（未做提现手动提现）六代收益可推
邀请链接https://app.cqskj.com/h5/#/pages/public/register?code=JXKJOY
'''

import requests
import time
import random
import os

def info(authorization):
    print("======开始执行用户查询======")
    url = "https://app.cqskj.com/index.php/member/member/detail"
    headers = {
        "Authorization": authorization,
        "role": "",
        "macid": "d0fda8a53e7f006abfc37cbf9682ed3b024ff091748ac24c6824123ea31af108",
        "user-agent": "Mozilla/5.0 (Linux; Android 11; V2068A Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/29.0)",
        "Content-Type": "application/json;charset=UTF-8",
        "Content-Length": "2",
        "Host": "app.cqskj.com",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip"
    }

    response = requests.post(url, headers=headers, json={})
    data = response.json()
    if data["code"] == 1:
        member_info = data["data"]["member_info"]
        nickname = member_info["nickname"]
        credit_money = member_info["credit_money"]
        team_money = member_info["team_money"]
        print("用户:", nickname, "个人任务收益:", credit_money, "广告收益:", team_money)
    else:
        print("获取用户信息失败")

def see(authorization):
    print("======开始执行看广告======")
    url = 'https://app.cqskj.com/index.php/member/ad/see'
    headers = {
        'Authorization': authorization,
        'role': '',
        'macid': 'd0fda8a53e7f006abfc37cbf9682ed3b024ff091748ac24c6824123ea31af108',
        'user-agent': 'Mozilla/5.0 (Linux; Android 11; V2068A Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/29.0)',
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Length': '28',
        'Host': 'app.cqskj.com',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
    }
    data = {"ad_xid": "afdsdcsdcsdcsdc"}

    for i in range(9):
        response = requests.post(url, headers=headers, json=data)
        print(response.text)
        
        delay = random.randint(15, 25)
        time.sleep(delay)

authorizations = os.environ.get('skj').split('#')

for auth in authorizations:
    info(auth)
    see(auth)