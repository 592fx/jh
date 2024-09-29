/**
 * 杰士邦安心福利社
 * const $ = new Env("杰士邦安心福利社");
 * cron 10 6,15 * * * 杰士邦安心福利社.js
 * 
 * ========= 青龙--配置文件 ===========
 * # 项目名称
 * export jsbaxfls='你抓包的Access-Token'

 * 自己抓包协议头上的Access-Token

 * 多账号换行或&隔开
 * 
 * ====================================
 *   
 */
const axios = require('axios');
const cookieString = process.env.jsbaxfls;

if(cookieString.length == 0) {
    console.log('没有找到cookie');
    return;
}

const config = {
  headers:{
    'Host': 'xh-vip-api.a-touchin.com',
    'charset': 'utf-8',
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN",
    "content-type": "application/json;charset=utf-8",
    "platform": "MP-WEIXIN",
    "Enterprise-hash": "10009",
    "sid": "10009", 
    "Referer": "https://servicewechat.com/wx9a2dc52c95994011/98/page-frame.html" 
  }
};

const config1 = {
    headers: {
    'Host': 'api.vshop.hchiv.cn',
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN",
    "content-type": "application/json",
    "Accept-Encoding": "gzip,compress,br,deflate",
    "appenv": "test", 
    "Referer": "https://servicewechat.com/wx5966681b4a895dee/8/page-frame.html" 
  }
}

// -H "access-token: 6ZLRFshSMXVmoO33Jm5I6j0MT9nWQmrdBiM_UNU2ymusA3vr9qDhvqgrHokKpJoh" 

// 将字符串按 & 进行分割
const cookies = cookieString.split('&');

async function sign(ck) {
  config.headers['access-token'] = ck;
  try {
    // 发送 POST 请求
    const response = await axios.get('https://xh-vip-api.a-touchin.com/mp/sign/applyV2', config);

    if(response.data.status == 200) {
        console.log('===签到成功====');
    }
    // 处理响应结果
    console.log(response.data);

  } catch (error) {
    console.error(error);
  }
}

async function vipsign() {
    const ck = process.env.jsbvip;
    const cks = ck.split('&');
    for (let i = 1; i <= cks.length; i++) {
         try {
            const ss = cks[i - 1].split('#');
            const cookie = ss[0];
            const phone = ss[1];
            const token = ss[2];
            const timestamp = new Date().getTime();
            config1.headers['Authorization'] = `Bearer ${token}`;
            config1.headers['cookie'] = cookie;
            const data = {
                'appId': 'wx5966681b4a895dee',
                'openId': 'true',
                'shopId': '467028',
                'shopNick': '',
                'timestamp': `${timestamp}`,
                'interfaceSource': 0,
                'activityId': '154742'
            };
            const response = await axios.post(`https://api.vshop.hchiv.cn/jfmb/cloud/activity/sign/getSignPrize?sideType=3&mob=${phone}&appId=wx5966681b4a895dee&openId=true&shopId=467028&shopNick=wx5966681b4a895dee&timestamp=${timestamp}&unionid=`, data, config1);
            console.log(response.data);
        } catch (error) {

        }
    }
}

async function check(ck) {
  // 从青龙环境中读取参数
  // 构造请求参数
//   const requestData = {
//     param1: param1,
//     param2: param2
//   };
  config.headers['access-token'] = ck;
  try {
    // 发送 POST 请求
    const response = await axios.get('https://xh-vip-api.a-touchin.com/mp/user/info', config);

    if(response.data.status == 200) {
        console.log('===查询成功====\n');
        var points = response.data.data.userInfo.points;
        console.log('积分: ' + points);
    }
    // 处理响应结果
    // console.log(response.data);

  } catch (error) {
    console.error(error);
  }
}

const executeRequests = async () => {
    await vipsign();
    
	for (let i = 1; i <= cookies.length; i++) {
	    // console.log(cookies[i]);
	    ck = cookies[i - 1];
	    console.log('第' + i + '个账号:');
	    await sign(ck);
	    await check(ck);
	}
}

executeRequests();

