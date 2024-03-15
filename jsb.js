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

 * 奖励：签到得安心币
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
    'Host': 'vip.ixiliu.cn',
    'charset': 'utf-8',
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; M2007J22C Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20231002 MMWEBID/7003 MicroMessenger/8.0.43.2480(0x28002B51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
    "content-type": "application/json;charset=utf-8",
    "platform": "MP-WEIXIN",
    "sid": "10009", 
    "Referer": "https://servicewechat.com/wx9a2dc52c95994011/81/page-frame.html" 
  }
};

// -H "access-token: 6ZLRFshSMXVmoO33Jm5I6j0MT9nWQmrdBiM_UNU2ymusA3vr9qDhvqgrHokKpJoh" 

// 将字符串按 & 进行分割
const cookies = cookieString.split('&');

async function sign(ck) {
  // 从青龙环境中读取参数
  // 构造请求参数
//   const requestData = {
//     param1: param1,
//     param2: param2
//   };
  config.headers['access-token'] = ck;
  try {
    // 发送 POST 请求
    const response = await axios.get('https://vip.ixiliu.cn/mp/sign/applyV2', config);

    if(response.data.status == 200) {
        console.log('===签到成功====');
    }
    // 处理响应结果
    console.log(response.data);

  } catch (error) {
    console.error(error);
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
    const response = await axios.get('https://vip.ixiliu.cn/mp/user/info', config);

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

for (let i = 1; i <= cookies.length; i++) {
    // console.log(cookies[i]);
    ck = cookies[i - 1];
    console.log('第' + i + '个账号:');
    sign(ck);
    check(ck);
}

