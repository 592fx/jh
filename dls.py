"""
杜蕾斯

抓任意包请求头 Access-Token
变量名: DLS_TOKEN

cron: 38 11 * * *
const $ = new Env("杜蕾斯");
"""
import json
import os
import random
import re
import time
import requests
import sys
from urllib3.exceptions import InsecureRequestWarning, InsecurePlatformWarning

sys.path.append(r'../../')
from common import save_result_to_file

requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
requests.packages.urllib3.disable_warnings(InsecurePlatformWarning)


class DLS():
    name = "杜蕾斯"

    def __init__(self, token):
        self.token = token
        self.headers = {
            'Host': 'vip.ixiliu.cn',
            'Connection': 'keep-alive',
            'Access-Token': token,
            'sid': '10006',
            'content-type': 'application/json;charset=utf-8',
            'platform': 'MP-WEIXIN',
            'Accept-Encoding': 'gzip,compress,br,deflate',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/4G Language/zh_CN'
        }

    def user_info(self):
        response = requests.get('https://vip.ixiliu.cn/mp/user/info', headers=self.headers)
        if not response or response.status_code != 200:
            save_result_to_file("error", self.name)
            print("获取用户信息失败")
            return
        response_json = response.json()
        if response_json["status"] == 40001:
            save_result_to_file("error", self.name)
            print("token已过期")
            return
        if response_json['code'] == 0:
            save_result_to_file("success", self.name)
            mobile = response_json["data"]["userInfo"]["mobile"]
            points = response_json["data"]["userInfo"]["points_total"]
            print(f'🐶{mobile} | 💰{points}积分\n')
        else:
            save_result_to_file("error", self.name)

    def sign(self):
        response = requests.get('https://vip.ixiliu.cn/mp/sign/applyV2', headers=self.headers)
        if not response or response.status_code != 200:
            print("签到异常：", response.text)
            return
        response_json = response.json()
        if response_json['status'] == 200 or response_json['status'] == 500:
            print(f'✅签到成功 | {response_json["message"]}')
        else:
            print(f'❌签到失败：{response_json["message"]}')

    def draw(self):
        response = requests.get('https://vip.ixiliu.cn/mp/activity.lottery/draw?snId=371837373125248&channelSn=0', headers=self.headers)
        if not response or response.status_code != 200:
            print("抽奖异常：", response.text)
            return
        response_json = response.json()
        # print(response_json)
        if response_json['status'] == 200:
            print(f'✅抽奖成功 | {response_json["data"]["prize"]["prize_name"]}')
        elif response_json['status'] == 500:
            print(f'❌抽奖失败：{response_json["message"]}')
        else:
            print(f'❌抽奖失败：{response_json["message"]}')
    
    def draw1(self):
        response = requests.get('https://vip.ixiliu.cn/mp/activity.lottery/draw?snId=374670664476672&channelSn=0', headers=self.headers)
        if not response or response.status_code != 200:
            print("抽奖异常：", response.text)
            return
        response_json = response.json()
        # print(response_json)
        if response_json['status'] == 200:
            print(f'✅抽奖成功 | {response_json["data"]["prize"]["prize_name"]}')
        elif response_json['status'] == 500:
            print(f'❌抽奖失败：{response_json["message"]}')
        else:
            print(f'❌抽奖失败：{response_json["message"]}')

    def main(self):
        self.user_info()
        time.sleep(random.randint(15, 30))

        self.sign()
        time.sleep(5)
        self.draw()
        time.sleep(5)
        self.draw1()

if __name__ == '__main__':
    env_name = 'DLS_TOKEN'
    tokenStr = os.getenv(env_name)
    if not tokenStr:
        print(f'⛔️未获取到ck变量：请检查变量 {env_name} 是否填写')
        exit(0)

    try:
        json_data = json.loads(tokenStr)
        print(f"共获取到{len(json_data)}个账号")
    except json.JSONDecodeError:
        print('⛔️ JSON 解析失败，请检查变量格式是否正确')
        exit(0)

    for i, token_data in enumerate(json_data, start=1):
        print(f"\n======== ▷ 第 {i} 个账号 ◁ ========")
        print(f"{token_data}")
        # print(f"{}")
        token = token_data.get('token')
        user_id = token_data.get('id')
        DLS(token).main()
        print("\n随机等待10-15s进行下一个账号")
        time.sleep(random.randint(10, 15))

