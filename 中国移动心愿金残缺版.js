/**
软件: 中国移动
功能：首页签到，得流量话费，心愿金换话费
抓包: https://wx.10086.cn/website/bind/bindAccount/new 全部cookie (因为中国移动大网认证解不来，我是江西就在江西里面抓的，将链接浏览器打开抓)
变量: xyjck = cookie值#要换的奖品名称  多账号@ 分割  例  xyjck =  JESSIONxxx#1元话费券
问题：签到一月为7次，。目前只能做微信小程序和公众号，
定时: 0 0 0 * * *
作者: 木兮
**/
var version_='jsjiami.com.v7';function _0x53bc(_0x688f5a,_0x1070ee){const _0x2453b2=_0x2453();return _0x53bc=function(_0x53bc3c,_0x878a84){_0x53bc3c=_0x53bc3c-0xd4;let _0x1e9c26=_0x2453b2[_0x53bc3c];if(_0x53bc['oUtOul']===undefined){var _0x300127=function(_0x587d53){const _0x2cb066='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x31c647='',_0x122428='';for(let _0x5a44c7=0x0,_0x2a67d9,_0x41d084,_0x139411=0x0;_0x41d084=_0x587d53['charAt'](_0x139411++);~_0x41d084&&(_0x2a67d9=_0x5a44c7%0x4?_0x2a67d9*0x40+_0x41d084:_0x41d084,_0x5a44c7++%0x4)?_0x31c647+=String['fromCharCode'](0xff&_0x2a67d9>>(-0x2*_0x5a44c7&0x6)):0x0){_0x41d084=_0x2cb066['indexOf'](_0x41d084);}for(let _0x52512d=0x0,_0x5c841c=_0x31c647['length'];_0x52512d<_0x5c841c;_0x52512d++){_0x122428+='%'+('00'+_0x31c647['charCodeAt'](_0x52512d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x122428);};const _0x525526=function(_0x3e3005,_0x327894){let _0x3917ef=[],_0x5e1c17=0x0,_0x49620e,_0x5d2599='';_0x3e3005=_0x300127(_0x3e3005);let _0x4eec71;for(_0x4eec71=0x0;_0x4eec71<0x100;_0x4eec71++){_0x3917ef[_0x4eec71]=_0x4eec71;}for(_0x4eec71=0x0;_0x4eec71<0x100;_0x4eec71++){_0x5e1c17=(_0x5e1c17+_0x3917ef[_0x4eec71]+_0x327894['charCodeAt'](_0x4eec71%_0x327894['length']))%0x100,_0x49620e=_0x3917ef[_0x4eec71],_0x3917ef[_0x4eec71]=_0x3917ef[_0x5e1c17],_0x3917ef[_0x5e1c17]=_0x49620e;}_0x4eec71=0x0,_0x5e1c17=0x0;for(let _0x4f9636=0x0;_0x4f9636<_0x3e3005['length'];_0x4f9636++){_0x4eec71=(_0x4eec71+0x1)%0x100,_0x5e1c17=(_0x5e1c17+_0x3917ef[_0x4eec71])%0x100,_0x49620e=_0x3917ef[_0x4eec71],_0x3917ef[_0x4eec71]=_0x3917ef[_0x5e1c17],_0x3917ef[_0x5e1c17]=_0x49620e,_0x5d2599+=String['fromCharCode'](_0x3e3005['charCodeAt'](_0x4f9636)^_0x3917ef[(_0x3917ef[_0x4eec71]+_0x3917ef[_0x5e1c17])%0x100]);}return _0x5d2599;};_0x53bc['PUXPPq']=_0x525526,_0x688f5a=arguments,_0x53bc['oUtOul']=!![];}const _0x5c9054=_0x2453b2[0x0],_0x586ec7=_0x53bc3c+_0x5c9054,_0x3c2267=_0x688f5a[_0x586ec7];return!_0x3c2267?(_0x53bc['OdCEyd']===undefined&&(_0x53bc['OdCEyd']=!![]),_0x1e9c26=_0x53bc['PUXPPq'](_0x1e9c26,_0x878a84),_0x688f5a[_0x586ec7]=_0x1e9c26):_0x1e9c26=_0x3c2267,_0x1e9c26;},_0x53bc(_0x688f5a,_0x1070ee);}const _0x3b6074=_0x53bc;function _0x2453(){const _0x443f66=(function(){return[...[version_,'LLCjDGsjurAiuaPqmXig.POcqofGmh.QDvPQ7wJe==','rSkPqW','W7qVa3WAjI/dRSoGggRdHsKOEsKwWOdcTCoDnSkdqCkBsutdPGW5umo/W65RW6DJpKexWRRcO1VdSIpdQmo6WOGoWOP5pLZcTMWFySk4hmkulmkhxryvWQ5QiKlcS8k4WRWqW4VcMmomW43cP8kTka7cN8oIWOdcTIBdKc5rW4ZcU8oLW47cGCksW73cHmkfW57cR8oKW5pcMSklo8kFkmooFcv2W4xcQmolh8oLWOrhWOqeDLCqwmk7W7DZFSoEW5ldVmoEjsK6rCk2xGtcSmkCFhyxnexcLw8xW4b6W7dcPJJcLfL0EGbEmsFdImo+bbpcGHZcQmkLySkblrpdRSk8WRddU8k3W4XWW4ZcJWq+ASknWOuuW5W2W6i3WORcUxRdKSongCkGd8k2aSoTbhtdRCk+iSkPaGRcM3muusbkDCkmCmkcWQ04W7DJW5SSWPBcKSoFWRLWa8kEW7XXjmkXnmoRANq7WRPzW4JcLx8Yyt3dS8oxW6HPB8kDWQfsFKGwWODOW7/cUstdOSoVW4FcLuGFWOpdLctcPSoOCmkYW6TgW4zEWRtdRH4RvCkobsG8pGH0WRNdKxC','cmokqmkYW74','W5Xoqgu','fx5Z','egjAW5ddRCof','BLZcOmkuWOWrra','dLO4imoWDmoN','jHjM','s0/dSI3cKW','iqDIvqvXWO/dJSoSvSoqWQFdThjMiGtdSKlcGLBdMw3dMG','WRldK2f2nmojW6RcOCkHWRe','WPxcSM4uW5irW7W','rCoaBW','AWr5','nCotWO0sW63cVCkNxgFdR0FdN8kUW4uatZb6pSkWqmkmWOeCW7xcV8kYW5lcUuKwt8oFofO','fCoiCfDc','WQTDd8kjW4vE','W54Q5yY05AY55OMqWRpcOW8','4P6ZW6dKUPJMLyhNRz7LIkxLT4ZLRPFMIOe','o8kNcXeu','WPBcSMOaWPOcW6m3zdq','4P6t5yA36zsz5lIAWOK','WQuRyG','W57cPtpdGevNtq','l8o0umkFW4CKo8oIiG','W4tdG8oZFWpdNfbDW7jJWRZcKq','ma1PcqP6W4NdUCoUxSowW6C','4P+15BYt5yI05B+w5Owj6yAB5lMd6lwY','sSk+W4jbqaKxv8kDW7SvWO5efmozWRCnqsZcStBdG8oBW50NvmkZAHjAW5BcQmo7WO7cOIycWQRdVmk7W5VdQeZdMmo3WPldSSoFW5FdS8kkmdPTuCoh','jW5M','W5BcQCoVWP8','qCkJWOHQEJWDd8ojWQC','4P+p56+X5yMe5AwU6lAQ77+Q6zs76k6i5l6R5OoD77Yq','WReFiLVcGmk5xxBdUKXdWPS','W6BcRxdcGJy','8loEPqFLJA3LHOpMJRBLP6NLKOZdT8kN','W6tcOSoZWPhdVq','ECklWPn5yq','c8kZW5dcQmkdW6JdI8kLDq','tmosFmks','W4OPhNSPiYa','rmoEW73dVW','BmkkvCk4eW','e0LWW6VdNq','WRPSW5RdKta','W7NWNBc/WPxLVjpLI4tNLQVMIApLIkFKVjCAW54','WOxdLHVdNda','8ks3Lg3MR7pLKytKUjdLIljt8jcvSW','WPXxgmkwWOntzSk1gK/cM8kum2pdUSoIq1KzW57dVCkFbColWQuXwaZdRmozW5hcT8oTWRZdJ8ocBmk+W7CVW4GnWQ7dL8kPgSkVBCkpsSoalxfnWP3cL8kiWRXZjSoJemoQWQ7cVCklbmk0jmkiFxDIaeFcJmoLWOJcP2H1WRlcPZhdRCkIkSkUfSklWP3dJrtcICkNWOjYW4SHWQDvWOBdI8ktW5TiD8k2vmovfCoIkCkWW5vggmoPWQldKqpcQSo6W5ZdMmkIaSkQW7ZdTCofmmorW4NcJW','iCoAW5y4W4tdSmkPuq','4PY15B+K5yQa5BMo5A+g5lIUbE+9SUIUP+AyTowKP+wfVoACGowhRoApUt0','W6hcLCoXeM0','gSoyWQNcUa','iSoiW4C','W7vnuM3cQa','W40BW5pdSCkz','v8odW7BdUsb+mCool8k+W7GjWOBdMa8IWRe','n2FdTgpcPrpcNSoiaLRcI8o+aq','W7hcH8ovWR8','cMf4W5BdVq','tweaia','WOfVW77dGcxdUSo3','ACoutCk3vG','s8kjE8kBW5CZW4m','sguEnCoKxCoFWOpcRXa','W6tcUh4','sh3dMZpcJcNdSa','W5NcG8oij24yW5C','8lcKHGtMR4/MLkRKUBRLIlNdIVc3L5O','imo7qhv/','nwWoW6vL','W73cPfytW6m','WOxcN8kZmHxcHh1EW50JWRFcLtyGWPZcJ2/cQCkSWP7dUSkYymkwFwRdGSoUW5lcIdJdHXrWtJjSWPVcGa5VtKDLW5BdIrpcMMy8W5VdKM/dTCkiWO8ns8ogW5HMW5iqqXRdHrFdTvNcO8kRkqbxW7ngoshdRmolg8ozxMLZncboW7LoaCoGWOK6W63dPhdcNZLTW7axswWMW6ldTvpcLCoxxMldJ8oTWQmbnY7dRY/dSNWQjmkfW5aHW5ZdKtuMCColrYO','WP9LW6G','W5JcUwq','5BYW5Os15ykZ','lvZcRCkW','aCo3rea','W5noqW','yYBcTd/dPW','hSosWRNcUCo/yfq','c8oXtq','4P2R5yQg5PsP5lM+54Ij5As86lwN','sZVcVdNdUuZdJmkkDqBdJmktumoQW4xdPCkupCohW611W44fWO1jWONcOf5zmsTIhmoJWOWqWReyCrpdGSoUB8oWcrtdG8kqs8oeW6bqiN7dGmodWO7cPX7dS8koWRLNemkNWRtcRmkVWPFdGCoIymo8WPuQWO9DW4pcR8ocW5dcTaNcGWdcNCo3WOJdTcVdI8kdW5tcJmoFW7TCW77dKSkhW7xdUcdcL2ZdJfngnrPuW5yLW5KnECo7WOldH8kkDSk+W4RcLCkbW4dcOq/dGK7dRKdcUslcNdulW7vOC8o7WOldNCo5kmoqECo0u8kTwdH7WQhcKsWQW6xcG8kgWQfXW68OWQCvW59AWPzSjSkaW6O5Ea','8ychSc/MRR/MNR/KUPJLIk5+8jU1TG','W5yqW4RdHCkt','l2SGwMWTW7y','W5xcTsddLKv7sL3dTmob'],...(function(){return[...['lhVdRa','rSojW7ddTty','ASk3WPjtuG','WOztdCkh','swuhmmoyvSoLWOVcPaW','bSoMW5lcM8kmWPpcO8kbgKtcQW','j8kcWQRcK8kt','WPdcPgG','W5RcQaddTcBdMSktt8k3W7hdK8kx','xeJcJmkEWO0','5lUB6lsU5y+G','56sg5yM/5B+m5Owp6ywM5yss6iY45y6i5yII','DeZcRW','WPX7Ca','W5e0dwufCghdRSkItNtdLdfukhfnWPVdOmosbSkAtCkntLJdOanPeCkTW6flWRqHzfWOW6RdOhpdVqFdTmo9WO0zW41/dX7cNa','5P2J5yMs5zIL6l+O5zUY6zEY6k28772/5Q2F5z286ysP6kYbhGZdSW','cSksov0','s8keWPf8CG','mrHJeGXS','o8oAW5m6W5a','CcrjW51X','wSowECkgsXhcLa','sCkdWPferG','W4PsqxlcHSoVW77cHq','F8oRxYm','h8kmWQNcJCk7WPGpsa','FYPAWOnIWRai','gCkEWRZcQ8k+WQurACo4adG','5P+B5Akr5yws5y6E6yE1W4XXsSoBBmk9','6k2+5Rkj6lAC5PAh776f5Q225zY86ysy6k+yW7HDWRO','WRznqW','orH1W4NdS8opWRvjWQL4','amkmW5OfW7i','bNxcRmk1ua','4P+o5PYf5OMP5yMB5A2b5BID5AwD5zo2','WRJdVc5hWReTjSkYqSkHi8ogoW','scyJWONcSCkyvXhcT8olWPFcOmkp','ffVdTcOL','A8klWRndFcWJpmobWRnzW5iowq','WOVdJ2m','oCoSWP/dKSoV','ALFdUri','WQ0OC8oSW5ZcOSogWOFcTbFcGW','W4PsqxlcJmoUW7FcGCojWPG','vaXMWRPe','W5RcRZu','nmo0vSkgW5P5FCkRomkuWQyOmmkLrJrSW6RdRM9baG3dLG','laLIhG','xSkPySkzdSk3nG','nqLMdW','WOZcLKGeW5m','WOxdSgFcLbGLAfRdTCoYemoj','WOpcN8k8j0JcIeDsW5XQ','WPJdQbtdOG','wmkvvmkChG','xmows8kdDW','56Ak5yI25BY/5OAv6ywT','WPfRW7ZdKaJdRmoImcS8uW','oSk0WQZcUmkP','W6xcPh4','vNFdJq','AZhcTspdTeFdIa','4P2pxEETV+wlLoAkGowiVW','z8oQwdVdIttdVSkiW5/dQmoNW5XHDSkNsmoMW48dWR8JW7pdHSk0FSkqv8klWRVdJSo7AtNcU8o9vSofDSkJW6LCm2uJuIuAr8kSkSoEtmokhCkcWO8g','8kcWRmkuWQZcLCoX5lME5yMHmFcDGPy','gmoWWPJdJ8oeW6ZdVq','WOztfSklW4TAzSk9','vgeemq','bmoXtKe','W7TcsSkhWQy','hJflWRddGW','kv5hW6S','ktHYWOxdQq','g8o1eCogtSoLzvbxvYNdN8kJ','FIboWRvXWQu','W5RcRZxdLW','W6HaFGu','57YV57Ib6zAT6kYI77+P5Q+I5z6n6ysn6k+ej0NcJW','lmkAf0Tn','WOTZW6xdLIS','lexcUSk5xxHtW7C','g8kake5VWOtdVbHvmq','W6dcJ8oK','dKldUZlcJXFdSG','imkNW4SQW7hdTvBdMq','petdKZ4YW5ZdJq','hmoTWPS','BmoXsc4','zvBcPCkv','WQLysWpcSW','k8oAW5qW'],...(function(){return['E8oXFZ/dIa','W7RcG1NcRa','Ca3dQ8oHbszXW6VdQIJdJCof','f8oLr8kgWOqcpSoTlCkC','hKSrW4rNqKpdUgWKW7iDWP1lW7JdMCkvwmo7BXidWQyyomkAvKacWO/dTaa9WRVdISoxge9jWQPEv8kRndRcKmk8WOjtpSoqx8oqwMVdO8ogWQeDW7XUiSoWWOBcN07dSMuwEHiWW7lcQgpdRSkLz8kQtCoFW4RdJmoQuGFcT8k5W5m/nmkTW6pcJSojbCk+WPBdJLqsW6VdPKixACkmzZSIvY9EWO/cSGVcI8k2W4qlW7y8WQ50WRdcL10YW5i4W4P3nCo2W4KOW6tcLSoGhWvbW68PW6moW6r/sLfOpMjAWRjRW6ZcQCkRW5uoBCoNW4HHrqLBWOZdPmkMlmk8WRhcTmk+gSkVmCkUcSktWOiOlCoft2xdHSk2bhGOguCRamkZxGKQvgBdJmoaWPuZWOxdR8o/WPmeAmkdkgNcTCkermoRcmkRaCkUteddKCo6bXxcOCkAWR3dPSkbWPTmaCkTyt/dLv49BhqyWR3dH8oLt1iAWRTgWPiZW5tcSwCUW50LW6i6W7NdLmolWQ/cSdCEu8oQWRufW4VcR8kUW4ldJmkwD8oIW5xdV8kQAZ7dGvaEbKOqWOhdNNtcMSoDmwVdRCozf8kEtfDxW7XbhmkHtSoVW6FdHSkiesVdTSodnSklebupW7VcGLFdJsFdPvfKa8k1ef8NeNldMdSRhCo4jGHqpL5ww8ohj8kiW6j9mspdIcFcIxKKW6LWgw3cV3qMW6aSer1QDZDGDWmfWPnnWRZdKSoUqwhcG8oqWPm9WRRdJ3fafb8ZfNH8W7RdVfrnWP3cNCkYWO3cO8oOyufvB8okW6RcLM4','tSkny8kA','j8opW5qHW5dcQ8oYgYVdPLtdNSkWW4Wuhha0bComdmkyW55FWRldS8o7WPJcTrSjfSoaDatdJmorvIykWOfHFCkxWONcN8kGWOb3W5BdVCoun8oyj8oNhSk7wsnoW7BdUJdcI8kjW5VcGSo6WPpdP8kFWPVcVHSHBMVdP1fHWQCTESkdzqxdRhTLWQnHbZPKWP7cTSoJa1ZcPcPVWQRdItVcSSo0e1tdL8ktbJxcKclcHIHqffapqxFdKSkMnCkOW6NdMmkIgmk1WR0DWQVdIq','WRdcUhuzW5SpW65Xj3/cTSkeWRxcTmkIW6dcMmoIkSoRW7VcMSoHWQ8stGtcQCkEW4mur8oVWPZcICkex8oRte/dS8kDWPlcOeD9W6iVhJr1if/dQSkFqmkbWPZcTc1wWR9PW73dV8k0WRRcSCkPWOlcKZKysK0jveOMiqxcOmkfWOJcPWFcNWTLDCk8WOxcItFdTCoYWQdcLMJdGSkdW4OIWQBcRXNdNfJdN8keWQFdSf7dNWpcSc1hvKFcHJWAW5FdNhFdRtvVdmo0WQddL13cUabPov8kWR4SrgSRzGfBW5D2W4yLmCklFubix2FcRqLdWO1VWP8AzCkvaComW70GW5enoSo8W4tdQvhdHK1NCcBdJCkNWPmKWQO1wCkSiSk5WRD1tNvlqeFdSatcLSkBWOVcJ8kZzMnmvsf4WQ1EW5/dMcPbmc5VW6FdKaO6mKdcSYfyWOBdUmkKsCo3o8kCjmo9quHGz3vYW7qegvaRCgFcImo/m8oiWOjZe8oeWQPWytetW7BcRfpdRmkUp8kGW6/cTs3dKaRdHmk7WQRdMMlcRNzkbSo9jCo/WRtdQSo/ouxcNmoCWPPTxSopW6ZcUI1kh0/dMqGNgfahWRhcLSkvCJVdRSkHW4NcRmoNW6XOdCkQW7G','v3mo','umoqW7ddRG','W7tdT1PUWR/dLHPrzmorza','y0hcSCkFWPSxra','W4L7Ed3dVW','DfZcSmkfWOWqqW','CfO5tL0XWPdcM8ofzmodW4JdN3W','gCksjeG','WP/cM8kMiW','cCoXb0DnWPtcQCod','eSkYW5m','kmo0W6SDW60','WOddQbFdSdhdS8k8uSkOW73dKq','WPhcUgG','WRbLrG','CJVcRtxdUW','k2eM','oHTjWPxdNG','auZdVgPQWPFdTSk7sLyfga','uSkQWPm','W4BcO20','W4baFGddNa','e8o/WO/dJ8o0W4BdUSotuvxcTG','uNqDjmoLa8k+W43cTq1SnmkoAr9oWPxcGCorq8o2W7SAFuRcI2xdStxcSeS2WOaAFrL+bCkMdmoTW6CQWPa','W7jT5y676AcA5y2LW7BcLCk5','W6NcUCoVaq','g8kcWOZcJ8k4','E040W5lcQmkxW61pWPfwuMddIG','W65+mSkVWOpdV8kgWO/cOXFcMmoOzG','jSk0k0Ti','WR0SC8o5W7VcQCouWOBcHbFcNa','FfhdRmkZWQDptva/WPiNW7ddMKCCW5lcMd7dTK7dHd3dU8oTl8odeeNdMmoYWRjgDCkGW6i','dpcrGiRdKoEVHum','W43cP8oH','zmoKBWRdQq','W4dcGCo5WO/dJa','WPldRH/dPs3dJa','W65aCa','W4HSzJ3dGq','nu0fW4XNqLS','x8osyCkh','AYFcOq','hCoXWPS','vM8o','W47cRx7cMq','W6JcGCo3WPq','W51lqa','s0NcQ8kdWP8','AqPZW6e','W5OHdxyE','sguyiCoZsSoL','WOrDbW','W5pdGcCl','W6/cRSoOdeOLW6mi','mCoDWO7cUCoq','W4KYfNytot3cLCk0rthcP3GWAtCg','WP1NCa','yCoRW5BdGXC','W5uVhG','EmkTD8k5dG','j1ldRcqZW4O','xSkJWOX4At82','4P2K5P2w6k+Q5ysj6zs35lUKW5O','W5hcUSoVWPhdNIi','W70OahCN','ovNdVsy+W4hdKa','tCoWDa3dMq','DsPDWQrQWROi','WObgfmksW58bpCo3arVdLmovCZ/cQ8k3de4EWP7dOSohfCohWRKPvGJdTCoeW5tcTmoHWQ3dJCofkSkPW7COW4PnWRtcMCkIhmkkomkyga','W7JcS8o6eu44W7a','BmkLx8kOW4C','bSoUwG','WPXOW6xdKcpdVq','W5mfW4RdLSkioCkGAZjWWR0VWR51bmoqWPeVW4NdHSk5smotWPGnjmkUWPHExSkqWPFdG1zmW4egzcnlWQz4y8o8WOxcUmofrCoxAG','vmofW7BdUs4','xSoB8y2rSCo/6Agq5y6S','nvKOWRe2WR/dUuG8WPn/W7SMwq','W5yuW43dLCkAzmoQ','hL5FW7pdHW','qmowACkxsXdcKW','W77cHCoYWOddHmoYFG','luz7W5RdMa'];}())];}())];}());_0x2453=function(){return _0x443f66;};return _0x2453();};(function(_0x4313c9,_0x41698d,_0x3e9371,_0x1cde3d,_0x49de6f,_0x1b02a4,_0x1e3301){return _0x4313c9=_0x4313c9>>0x2,_0x1b02a4='hs',_0x1e3301='hs',function(_0x428d59,_0x101845,_0x1c190a,_0xe057a9,_0x228cb9){const _0x1e8efe=_0x53bc;_0xe057a9='tfi',_0x1b02a4=_0xe057a9+_0x1b02a4,_0x228cb9='up',_0x1e3301+=_0x228cb9,_0x1b02a4=_0x1c190a(_0x1b02a4),_0x1e3301=_0x1c190a(_0x1e3301),_0x1c190a=0x0;const _0x2a2bbb=_0x428d59();while(!![]&&--_0x1cde3d+_0x101845){try{_0xe057a9=-parseInt(_0x1e8efe(0x187,'[PE!'))/0x1+-parseInt(_0x1e8efe(0x166,'XEKL'))/0x2+parseInt(_0x1e8efe(0xea,'s[vo'))/0x3*(-parseInt(_0x1e8efe(0x15c,'r1QW'))/0x4)+parseInt(_0x1e8efe(0x1e0,'jwVp'))/0x5+parseInt(_0x1e8efe(0x12d,'aK2V'))/0x6+-parseInt(_0x1e8efe(0x1d8,'wwID'))/0x7+parseInt(_0x1e8efe(0x172,'4GIv'))/0x8;}catch(_0x1cc040){_0xe057a9=_0x1c190a;}finally{_0x228cb9=_0x2a2bbb[_0x1b02a4]();if(_0x4313c9<=_0x1cde3d)_0x1c190a?_0x49de6f?_0xe057a9=_0x228cb9:_0x49de6f=_0x228cb9:_0x1c190a=_0x228cb9;else{if(_0x1c190a==_0x49de6f['replace'](/[GrwLuCJQDOAqXhegPf=]/g,'')){if(_0xe057a9===_0x101845){_0x2a2bbb['un'+_0x1b02a4](_0x228cb9);break;}_0x2a2bbb[_0x1e3301](_0x228cb9);}}}}}(_0x3e9371,_0x41698d,function(_0x3121e6,_0x6ec481,_0x75c3c8,_0x46d224,_0x2e688c,_0x503ea3,_0x27ad2b){return _0x6ec481='\x73\x70\x6c\x69\x74',_0x3121e6=arguments[0x0],_0x3121e6=_0x3121e6[_0x6ec481](''),_0x75c3c8=`\x72\x65\x76\x65\x72\x73\x65`,_0x3121e6=_0x3121e6[_0x75c3c8]('\x76'),_0x46d224=`\x6a\x6f\x69\x6e`,(0x139df2,_0x3121e6[_0x46d224](''));});}(0x32c,0xd08f6,_0x2453,0xcd),_0x2453)&&(version_=_0x2453);const $=new Env(_0x3b6074(0x141,'SN**')),notify=$['isNode']()?require(_0x3b6074(0x111,'Sww%')):'',notifyFlag=0x0,debug=0x0,ckName=_0x3b6074(0x158,'%RTy');let userCookie=($['isNode']()?process['env'][ckName]:$[_0x3b6074(0x101,'S5X!')]())||'';const userAgents={'app':'Mozilla/5.0\x20(Linux;\x20U;\x20Android\x2011;\x20zh-CN;\x20M2012K10C\x20Build/RP1A.200720.011)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/69.0.3497.100\x20UWS/3.22.2.57\x20Mobile\x20Safari/537.36\x20UCBS/3.22.2.57_221124174200\x20AlipayDefined\x20AriverApp(mPaaSClient/10.2.8)\x20MiniProgram\x20\x20leadeon/8.9.0/CMCCIT/tinyApplet','wx':_0x3b6074(0x1bf,'!VV$'),'wx_mini':_0x3b6074(0x16b,'tbIa'),'zfb':_0x3b6074(0x168,'rL$U')};let maxConcurrency=0x3;class UserInfo{constructor(_0x417d7f){const _0x5e07c7=_0x3b6074,_0x5500da={'FZOYR':'https://6460749742196442.h5app.10086.cn/6460749742196442/1.0.119.883/index.html#pages/qwhdmark/views/home/index','zEnON':_0x5e07c7(0x12f,'taAK'),'WBWCP':_0x5e07c7(0x167,'eqo$'),'ZzVar':'application/json;charset=UTF-8','TLJTS':_0x5e07c7(0x109,'s[vo'),'JMlri':'wx.10086.cn','Axxmu':_0x5e07c7(0x1d3,'tbIa'),'Jlvmg':_0x5e07c7(0x14b,'HkXk'),'RkSIx':'document'},[_0x497d88,_0x344a00]=_0x417d7f[_0x5e07c7(0xec,'aK2V')]('#');this[_0x5e07c7(0x134,'uLu1')]=_0x497d88,this[_0x5e07c7(0x1de,'taAK')]=_0x344a00,this[_0x5e07c7(0x1c4,'KHTP')]={'Accept-Charset':_0x5e07c7(0x1d2,'%8Kq'),'referer':_0x5500da[_0x5e07c7(0x1a5,'VPGK')],'login-check':'1','x-requested-with':_0x5500da[_0x5e07c7(0x11f,'taAK')],'User-Agent':'','Host':_0x5e07c7(0x10e,'SN**'),'Connection':_0x5500da['WBWCP'],'Cookie':'','content-type':_0x5500da[_0x5e07c7(0x12e,'x4Cj')],'Accept':_0x5500da[_0x5e07c7(0x14f,'[PE!')]},this[_0x5e07c7(0x18a,'KjBC')]={'Host':_0x5500da[_0x5e07c7(0xd6,'taAK')],'Connection':_0x5500da['Axxmu'],'Upgrade-Insecure-Requests':'1','User-Agent':userAgents[_0x5e07c7(0x1b3,'Aich')],'Accept':_0x5e07c7(0xf9,'wwID'),'Sec-Fetch-Mode':_0x5500da[_0x5e07c7(0xe7,'uLu1')],'Sec-Fetch-User':'?1','Sec-Fetch-Dest':_0x5500da[_0x5e07c7(0x1a7,'x6dL')],'Accept-Language':_0x5e07c7(0x18b,'KHTP')};}async[_0x3b6074(0xfb,'PHA(')](){const _0x629fc2=_0x3b6074,_0x5573c1={'fHeHn':function(_0x3c1875,_0x5b88d1){return _0x3c1875===_0x5b88d1;},'uRjui':_0x629fc2(0x1c9,'EA2Q'),'DWtwy':'❌运行出错:'};try{const _0x2f3117=await this['refreshToken']();if(!_0x2f3117){console[_0x629fc2(0x196,'SN**')](_0x629fc2(0x103,'VPGK'));return;}await this['sign_in']();const _0x1154b2=[{'name':_0x629fc2(0x149,'S!gB'),'user_agent':userAgents['app']},{'name':'📢\x20微信公众号任务\x20📢','user_agent':userAgents['wx']},{'name':'📱\x20微信小程序任务\x20📱','user_agent':userAgents[_0x629fc2(0x1ad,'x4Cj')]},{'name':'📱\x20支付宝小程序任务\x20📱','user_agent':userAgents[_0x629fc2(0x1d5,'KjBC')]}];for(const _0x5a8a34 of _0x1154b2){if(_0x5573c1[_0x629fc2(0xf7,'rL$U')](_0x5a8a34['name'],'📱\x20支付宝小程序任务\x20📱')||_0x5573c1['fHeHn'](_0x5a8a34['name'],'📱\x20app任务\x20📱')){console['log']('❌'+_0x5a8a34[_0x629fc2(0x19c,'[^9r')]);continue;}this['headers'][_0x5573c1[_0x629fc2(0x162,'$%bp')]]=_0x5a8a34['user_agent'],console[_0x629fc2(0xfa,'%RTy')]('\x0a'+_0x5a8a34[_0x629fc2(0x174,'wwID')]),await this['getTaskList'](),await $[_0x629fc2(0x1dd,'9t!P')](0x1388);}await $[_0x629fc2(0x13a,'4GIv')](0x1f4),await this['userInfo']();}catch(_0x4a7e7a){console[_0x629fc2(0x100,'s[vo')](_0x5573c1['DWtwy'],_0x4a7e7a[_0x629fc2(0x146,'s[vo')]);}}async[_0x3b6074(0x1d9,'4GIv')](){const _0x55e4ed=_0x3b6074,_0x2e38d1={'fdvFa':'https://wx.10086.cn/qwhdsso/login?dlwmh=true&actUrl=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fqwhdmark%2F1021122301%3Ftouch_id%3DJTST_P00000010996%26channelId%3DP00000010996%26yx%3DJHQD9999999999','TJbDW':'GET','CIbVm':_0x55e4ed(0x16e,'ppam'),'qQhMx':'keep-alive','gOKLN':_0x55e4ed(0x175,'Aich'),'DhybQ':_0x55e4ed(0x104,'s[vo'),'DOdGv':_0x55e4ed(0xe1,'HkXk'),'LxUbu':_0x55e4ed(0x1c8,'4GIv'),'wRbDJ':'cross-site','HjCdN':_0x55e4ed(0xe2,'#[Qh'),'ZqMnd':'document','FLqHe':_0x55e4ed(0x137,'eqo$'),'pRCPt':_0x55e4ed(0x128,'[PE!'),'eyDpg':_0x55e4ed(0x17b,'s[vo')};try{const _0x563753={'url':_0x2e38d1['fdvFa'],'method':_0x2e38d1[_0x55e4ed(0x129,'v98Y')],'headers':{...this[_0x55e4ed(0x182,'SN**')],'Cookie':_0x55e4ed(0x1db,'taAK')}};let _0x411d71=await $[_0x55e4ed(0x11e,'6ek1')](_0x563753);const _0x9907d1=_0x411d71[_0x55e4ed(0xd8,'6ek1')][_0x55e4ed(0x106,')QMd')](/var loginPath = '.*?sid=([^&']*)/),_0x85a641=_0x9907d1&&_0x9907d1[0x1],_0x452116={'url':_0x55e4ed(0x16a,'#[Qh')+_0x85a641+'&activityId=1021010101&activityName=%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A810086','method':_0x55e4ed(0x127,'^tIy'),'headers':{'Host':_0x2e38d1['CIbVm'],'Connection':_0x2e38d1[_0x55e4ed(0xdf,'Sww%')],'Pragma':_0x2e38d1[_0x55e4ed(0x1ba,'aK2V')],'Cache-Control':_0x2e38d1[_0x55e4ed(0x177,'#[Qh')],'Upgrade-Insecure-Requests':'1','User-Agent':_0x2e38d1[_0x55e4ed(0x1ac,'!VV$')],'Accept':_0x2e38d1[_0x55e4ed(0x143,'w8ha')],'X-Requested-With':_0x2e38d1['LxUbu'],'Sec-Fetch-Site':_0x2e38d1['wRbDJ'],'Sec-Fetch-Mode':_0x2e38d1[_0x55e4ed(0x1a2,'S5X!')],'Sec-Fetch-User':'?1','Sec-Fetch-Dest':_0x2e38d1[_0x55e4ed(0x112,'KHTP')],'Referer':_0x2e38d1[_0x55e4ed(0xdb,'x6dL')],'Accept-Language':_0x55e4ed(0x1cd,'#[Qh'),'Cookie':this[_0x55e4ed(0x15a,'%8Kq')]}},_0x5a9de8=await $['request'](_0x452116),_0x56aee9=_0x5a9de8[_0x55e4ed(0xf3,'r1QW')]['res'][_0x55e4ed(0x133,'KjBC')],_0x1d8a4c=_0x5a9de8[_0x55e4ed(0x1ca,'tbIa')][_0x2e38d1['pRCPt']];if(_0x56aee9['indexOf'](_0x2e38d1[_0x55e4ed(0x186,'w8ha')])===-0x1)return![];await $[_0x55e4ed(0x13a,'4GIv')](0x1f4);const _0xccf16c={'url':_0x56aee9,'method':_0x2e38d1[_0x55e4ed(0x1c0,'eqo$')],'headers':{...this[_0x55e4ed(0x142,'%RTy')],'setCookie':_0x1d8a4c}};return await $['request'](_0xccf16c),await $[_0x55e4ed(0x16d,'VPGK')](0x1f4),this[_0x55e4ed(0x1bb,'6ek1')][_0x55e4ed(0x1cf,'HkXk')]=_0x1d8a4c,!![];}catch(_0x4d5932){console[_0x55e4ed(0x1a4,'^tIy')]('❌刷新令牌出错:',_0x4d5932[_0x55e4ed(0x1b9,')QMd')]);}}async[_0x3b6074(0xd9,'!VV$')](){const _0xd15749=_0x3b6074,_0x397c6d={'BiZwa':'https://wx.10086.cn/qwhdhub/api/mark/info/prizeInfo','BnXFc':function(_0x2e41f4,_0xe0a2c2){return _0x2e41f4!==_0xe0a2c2;},'JCqVy':'SUCCESS','pfHqN':_0xd15749(0x183,'V2zn'),'kzCAS':_0xd15749(0x1a0,'ppam'),'IfUdp':function(_0x1555fe,_0x119028){return _0x1555fe!==_0x119028;}};try{const _0xe4233d={'url':_0x397c6d[_0xd15749(0x157,'%8Kq')],'method':'POST','headers':this['headers'],'data':{}},{data:_0x2016f9}=await $[_0xd15749(0x1bc,'bnW2')](_0xe4233d);if(_0x397c6d[_0xd15749(0x1ae,'7&wn')](_0x2016f9[_0xd15749(0xda,'VPGK')],_0x397c6d[_0xd15749(0x192,'jwVp')])){const _0x184a9c=_0x2016f9[_0xd15749(0x195,'s[vo')];this['signResult'][_0xd15749(0x121,'7&wn')](_0x184a9c),console['log'](_0x184a9c);return;}const _0xee3a44=_0x2016f9[_0xd15749(0xd8,'6ek1')][_0xd15749(0x178,'Sww%')];if(_0xee3a44){const _0x673ee=_0xd15749(0x1d1,'(meB');console['log'](_0x673ee);return;}await $[_0xd15749(0xed,'V2zn')](0x1f4);const _0x35632f={'url':_0x397c6d[_0xd15749(0x17d,'[PE!')],'method':_0x397c6d[_0xd15749(0x18e,'7&wn')],'headers':this['headers'],'data':{}},{data:_0x5dcd39}=await $[_0xd15749(0x19e,'V2zn')](_0x35632f);if(_0x397c6d[_0xd15749(0xdd,'%RTy')](_0x5dcd39['code'],_0xd15749(0xf4,'bD@G'))){const _0x4fd282=_0x5dcd39[_0xd15749(0xf2,'yIAk')];console[_0xd15749(0x19f,'HkXk')](_0x4fd282);return;}const _0x54b827=_0xd15749(0x147,'[PE!');console[_0xd15749(0x179,'tbIa')](_0x54b827);}catch(_0x3cc46b){const _0x491ad9=_0xd15749(0x1df,'ppam')+_0x3cc46b['message'];console[_0xd15749(0x18d,'9t!P')](_0x491ad9);}}async[_0x3b6074(0x124,'w8ha')](){const _0x10fab4=_0x3b6074,_0x6d78e4={'lSBGw':'https://wx.10086.cn/qwhdhub/api/mark/task/taskList','HGfwd':_0x10fab4(0xeb,'9t!P'),'HrcxS':function(_0x356b7f,_0x3b1615){return _0x356b7f!==_0x3b1615;},'jXdTT':'SUCCESS'};try{const _0x151c1b={'url':_0x6d78e4['lSBGw'],'method':_0x6d78e4[_0x10fab4(0x189,'%8Kq')],'headers':this[_0x10fab4(0x107,'^RD@')],'data':{}},{data:_0x233fc4}=await $[_0x10fab4(0xee,'%RTy')](_0x151c1b);if(_0x6d78e4[_0x10fab4(0x131,'SN**')](_0x233fc4[_0x10fab4(0x161,'KHTP')],_0x6d78e4[_0x10fab4(0xdc,'aK2V')])){console[_0x10fab4(0x17a,'$%bp')](_0x233fc4[_0x10fab4(0x15f,'SN**')]);return;}const _0x28c07e=_0x233fc4[_0x10fab4(0xfd,'XEKL')][_0x10fab4(0x11c,'#[Qh')];console[_0x10fab4(0x1cc,'[^9r')](_0x10fab4(0xf5,'uLu1')),await this[_0x10fab4(0x1a3,'!VV$')](_0x28c07e,'1',maxConcurrency),console[_0x10fab4(0x145,'r1QW')](_0x10fab4(0xe0,'%8Kq')),await this[_0x10fab4(0x1a3,'!VV$')](_0x28c07e,'2',maxConcurrency),console[_0x10fab4(0x130,'EA2Q')](_0x10fab4(0x105,'tbIa')),await this['processTaskByType'](_0x28c07e,'3',maxConcurrency);}catch(_0x2add8d){console['error'](_0x2add8d[_0x10fab4(0x1a9,'taAK')]);}}async[_0x3b6074(0xe9,'VPGK')](_0x3a3ca8,_0x8e0489,_0x5f11d6){const _0x59221b=_0x3b6074,_0x1b3999={'ZLuiO':function(_0x2a1b16,_0x49eba2){return _0x2a1b16==_0x49eba2;}},_0x39e7c4=[],_0x317873=async(_0x5863cd,_0x598efc,_0x14baf3)=>{const _0x202d2e=_0x53bc;try{if(!_0x598efc)console[_0x202d2e(0x1be,'x6dL')](_0x202d2e(0x1d0,'%RTy')+_0x14baf3+']'),await this['doTask'](_0x5863cd,_0x598efc);else{if(_0x598efc==0x2)console[_0x202d2e(0x102,'Aich')]('-\x20已领取:\x20['+_0x14baf3+']');else _0x1b3999['ZLuiO'](_0x598efc,0x1)&&(console[_0x202d2e(0x15b,'bnW2')](_0x202d2e(0x184,'KjBC')+_0x14baf3+']'),await this['doTask'](_0x5863cd,_0x598efc));}}finally{_0x39e7c4[_0x202d2e(0x11b,'4GIv')](_0x39e7c4[_0x202d2e(0x14a,'SN**')](_0x5863cd),0x1);}};for(const _0x2aee92 of _0x3a3ca8[_0x59221b(0x190,'Sww%')](_0x4b5600=>_0x4b5600['taskType']===_0x8e0489)){const {taskName:_0x364d47,taskId:_0x516063,status:_0x11043c}=_0x2aee92,_0x56d92a=_0x317873(_0x516063,_0x11043c,_0x364d47);_0x39e7c4['push'](_0x56d92a),_0x39e7c4['length']>=_0x5f11d6&&await Promise['race'](_0x39e7c4);}await Promise[_0x59221b(0x17f,'taAK')](_0x39e7c4);}async['doTask'](_0xca0a75,_0x8d18f1){const _0x57ace5=_0x3b6074,_0x35e591={'OHudl':_0x57ace5(0x1b0,'HkXk'),'kCzvF':'POST','GejQS':function(_0x5d263f,_0x15fbf5){return _0x5d263f!==_0x15fbf5;},'rSplh':'SUCCESS','XiHXm':'https://wx.10086.cn/qwhdhub/api/mark/task/getTaskAward'};try{if(!_0x8d18f1){const _0x5110bf=_0x35e591[_0x57ace5(0x12a,'XEKL')],_0x2bbef2={'url':_0x5110bf,'method':_0x35e591[_0x57ace5(0xe4,'bD@G')],'headers':this['headers'],'data':{'taskId':_0xca0a75}},{data:_0x3a72ad}=await $[_0x57ace5(0xf0,'HRQh')](_0x2bbef2);if(_0x35e591[_0x57ace5(0xf6,'Aich')](_0x3a72ad[_0x57ace5(0x14d,'Aich')],_0x35e591[_0x57ace5(0x13f,'x6dL')])){console[_0x57ace5(0x136,'(meB')](_0x3a72ad[_0x57ace5(0x116,'^tIy')]);return;}const _0x2c71bb=_0x3a72ad[_0x57ace5(0x199,'bnW2')][_0x57ace5(0x15d,'v98Y')];await $[_0x57ace5(0x173,'%8Kq')](0x1388);const _0x18c83d=_0x57ace5(0x117,'!VV$'),_0x426a97={'url':_0x18c83d,'method':_0x57ace5(0x150,'aK2V'),'headers':this['headers'],'data':{'taskId':_0xca0a75,'taskType':_0x2c71bb}},{data:_0x4ed977}=await $[_0x57ace5(0x171,'KHTP')](_0x426a97);if(_0x4ed977['code']!==_0x35e591['rSplh']){console['log'](_0x4ed977['msg']);return;}}const _0x267834=_0x35e591['XiHXm'],_0x4a8a08={'url':_0x267834,'method':_0x35e591['kCzvF'],'headers':this['headers'],'data':{'taskId':_0xca0a75}},{data:_0x362285}=await $['request'](_0x4a8a08);if(_0x362285[_0x57ace5(0x1c1,'uLu1')]!==_0x35e591['rSplh']){console[_0x57ace5(0x180,'PHA(')](_0x362285[_0x57ace5(0xe6,'#[Qh')]);return;}const _0x28f63e=_0x362285[_0x57ace5(0x119,'%8Kq')][_0x57ace5(0x122,'w8ha')];console['log'](_0x57ace5(0x1b7,'w8ha')+_0x28f63e+_0x57ace5(0xfc,'%RTy'));}catch(_0x29a14d){console[_0x57ace5(0xfa,'%RTy')](_0x57ace5(0x1d4,'KjBC'),_0x29a14d['message']);}}async[_0x3b6074(0x120,'uLu1')](){const _0x57deec=_0x3b6074,_0x46342b={'JfmQt':_0x57deec(0x150,'aK2V'),'vjmWb':'app','EjuzF':function(_0x2825c9,_0x41d207){return _0x2825c9!==_0x41d207;},'jXQvs':function(_0x112e3e,_0x5c0c48){return _0x112e3e(_0x5c0c48);},'TOIHN':'❌当前用户未开启兑换','teCpY':_0x57deec(0x1da,'!VV$'),'AgEDx':_0x57deec(0x1aa,'6ek1')};try{const _0x30b8aa=_0x57deec(0x148,'7&wn'),_0x29e2e5={'url':_0x30b8aa,'method':_0x46342b[_0x57deec(0x14e,'LDmD')],'headers':this['headers'],'data':{'channel':_0x46342b[_0x57deec(0xe8,')QMd')]}},{data:_0x3cb92b}=await $['request'](_0x29e2e5);if(_0x46342b[_0x57deec(0xd5,'9t!P')](_0x3cb92b[_0x57deec(0x185,'bD@G')],_0x57deec(0xf4,'bD@G'))){console[_0x57deec(0x19a,'LDmD')](_0x3cb92b[_0x57deec(0x1dc,'[PE!')]);return;}const _0x57b9b9=_0x46342b['jXQvs'](parseFloat,_0x3cb92b['data'][_0x57deec(0x108,'(meB')]);console['log'](_0x57deec(0xde,'%RTy')+_0x57b9b9+'心愿金');if(!this['rewardName']){console['log'](_0x46342b['TOIHN']);return;}const _0x5233e1=_0x3cb92b['data'][_0x57deec(0x1ab,'9t!P')][_0x57deec(0xfe,'Aich')](_0x28eddd=>_0x28eddd[_0x57deec(0x14c,'V2zn')]===this[_0x57deec(0xf1,'V2zn')]);if(!_0x5233e1){console[_0x57deec(0x1c6,'[PE!')](_0x57deec(0x12b,'jwVp'));return;}const {cost:_0x1a4a79,id:_0x14e2be}=_0x5233e1;if(_0x57b9b9<=_0x1a4a79){console[_0x57deec(0x17c,'^RD@')](_0x46342b[_0x57deec(0x140,'6ek1')]);return;}console['log'](_0x57deec(0xd4,'LDmD')+this[_0x57deec(0x13d,'wwID')]),await this[_0x57deec(0x1a1,'bD@G')](_0x14e2be);}catch(_0x3c4907){console['log'](_0x46342b[_0x57deec(0xef,'6ek1')],_0x3c4907['message']);}}async[_0x3b6074(0x159,'XEKL')](_0x589e54){const _0x15304b=_0x3b6074,_0x50110e={'qWXkz':'https://wx.10086.cn/qwhdhub/api/mark/task/checkStock','TWoeQ':_0x15304b(0x1b5,')QMd'),'cEsay':function(_0x16d241,_0x46794b){return _0x16d241!==_0x46794b;},'Lazzm':'SUCCESS','KToVG':function(_0x4cc2a8,_0x44691f){return _0x4cc2a8===_0x44691f;},'YqmXZ':_0x15304b(0xe3,'S5X!'),'LuOFh':_0x15304b(0x132,'r1QW'),'rVZsn':'兑换出错了:'};try{const _0x52fd70=_0x50110e[_0x15304b(0x1c7,'r1QW')],_0x1794a9=_0x50110e[_0x15304b(0x1bd,'aK2V')],_0x35619e={'url':_0x52fd70,'method':_0x15304b(0x165,'PHA('),'headers':this['headers'],'data':{'prizeId':_0x589e54}},{data:_0x559d49}=await $['request'](_0x35619e);if(_0x50110e[_0x15304b(0x151,'[PE!')](_0x559d49[_0x15304b(0xe5,'S5X!')],_0x50110e[_0x15304b(0x18f,'bnW2')])){console['log'](_0x559d49[_0x15304b(0x110,'tbIa')]);return;}const _0x361b59=_0x559d49[_0x15304b(0x163,'#[Qh')][_0x15304b(0x1b6,'VPGK')];if(_0x50110e[_0x15304b(0x170,'jwVp')](_0x361b59,0x0)){console[_0x15304b(0xff,'uLu1')](_0x50110e[_0x15304b(0x10b,'taAK')]);return;}console[_0x15304b(0x130,'EA2Q')]('当前库存数量:'+_0x361b59);const _0x21f901={'url':_0x1794a9,'method':_0x50110e['LuOFh'],'headers':this[_0x15304b(0x1d6,'(meB')],'data':{'prizeId':_0x589e54}},{data:_0x408437}=await $[_0x15304b(0x1b1,'bD@G')](_0x21f901);if(_0x408437[_0x15304b(0x185,'bD@G')]!==_0x50110e[_0x15304b(0x1e1,'PHA(')]){console[_0x15304b(0xfa,'%RTy')](_0x408437[_0x15304b(0x1cb,'6ek1')]);return;}console['log']('兑换成功，请记得去使用哦!');}catch(_0x1f2157){console[_0x15304b(0x144,'yIAk')](_0x50110e[_0x15304b(0x1ce,'Aich')],_0x1f2157[_0x15304b(0x123,']ZiE')]);}}}(async()=>{const _0x54fa1c=_0x3b6074,_0x3ccc4={'rAQMi':function(_0x295969,_0x2a6049){return _0x295969+_0x2a6049;},'kZyQE':function(_0x4b77ed,_0x3904b5,_0x22eff7){return _0x4b77ed(_0x3904b5,_0x22eff7);}};if(!userCookie){console[_0x54fa1c(0x176,'S!gB')](_0x54fa1c(0x125,'wwID'));return;}const _0x2c9ecc=userCookie['split']('@');console[_0x54fa1c(0x197,'V2zn')](_0x54fa1c(0x114,'tbIa')+_0x2c9ecc['length']+_0x54fa1c(0x113,'^tIy'));for(const [_0xaeb60e,_0xc41895]of _0x2c9ecc['entries']()){console[_0x54fa1c(0x1cc,'[^9r')](_0x54fa1c(0x18c,'KHTP')+_0x3ccc4['rAQMi'](_0xaeb60e,0x1)+'\x20个账号\x20📋');const _0x1541cd=new UserInfo(_0xc41895);await _0x1541cd[_0x54fa1c(0x115,'KHTP')](),console[_0x54fa1c(0x18d,'9t!P')]('\x0a⏳\x20下一个账号将在随机等待5-10秒后开始\x20⏳'),await $[_0x54fa1c(0x194,'6ek1')](_0x3ccc4['kZyQE'](randomInt,0x1388,0x2710));}})()[_0x3b6074(0x19d,'!VV$')](_0x568acc=>$[_0x3b6074(0x1be,'x6dL')](_0x568acc))[_0x3b6074(0x193,'rL$U')](()=>$['done']());function randomInt(_0x54035b,_0x22564f){const _0x5ede7a={'BAzOv':function(_0x486ec6,_0x21c197){return _0x486ec6*_0x21c197;}};return Math['floor'](_0x5ede7a['BAzOv'](Math['random'](),_0x22564f-_0x54035b+0x1)+_0x54035b);}async function SendMsg(_0x9461f6){const _0x260f37=_0x3b6074;if(!_0x9461f6)return;notifyFlag>0x0?$[_0x260f37(0x1a8,'x4Cj')]()?await notify[_0x260f37(0x10d,'V2zn')]($['name'],_0x9461f6):$[_0x260f37(0x16c,'V2zn')](_0x9461f6):console[_0x260f37(0x1c2,'aK2V')](_0x9461f6);}function Env(_0x5cb388){const _0x1c2790=_0x3b6074,_0x55a235={'qAGtd':function(_0x3e4db5,_0xe03431){return _0x3e4db5!==_0xe03431;},'FCOJG':function(_0x469af3,_0x4ac2ba){return _0x469af3===_0x4ac2ba;},'wOWYu':_0x1c2790(0x1b4,'%RTy'),'Mpjsv':function(_0x2503e3,_0xe079da){return _0x2503e3===_0xe079da;},'Boikd':'ECONNABORTED','UIUFu':_0x1c2790(0x126,'yIAk'),'xBnwz':_0x1c2790(0x118,'%8Kq'),'cluYr':function(_0x350c9b,_0x58a197){return _0x350c9b-_0x58a197;},'oxqox':function(_0x35d7c5,_0x4b0e50){return _0x35d7c5(_0x4b0e50);},'YyblL':_0x1c2790(0x10a,'VPGK')},_0x4ae0a5=_0x55a235['oxqox'](require,_0x55a235[_0x1c2790(0x10f,'w8ha')]),_0x3cf510={'name':_0x5cb388,'startTime':new Date()[_0x1c2790(0x1af,']ZiE')]()};return _0x3cf510[_0x1c2790(0x1c3,'aK2V')]=function(){const _0x14c8da=_0x1c2790;return _0x55a235[_0x14c8da(0x13b,'tbIa')](typeof module,_0x14c8da(0xd7,'S!gB'))&&_0x55a235[_0x14c8da(0x135,']ZiE')](typeof module[_0x14c8da(0x16f,'KHTP')],_0x55a235[_0x14c8da(0x11d,'[^9r')]);},_0x3cf510[_0x1c2790(0x15e,'x4Cj')]=async function(_0x2d09e6,_0x4c2b1b=0x1388,_0x522fc3=0x3){const _0x26c437=_0x1c2790;let _0x1b96ba=0x0;while(_0x1b96ba<_0x522fc3){try{const _0x17b7d={..._0x2d09e6,'timeout':_0x4c2b1b},_0x3e3076=await _0x4ae0a5(_0x17b7d);if(debug)console['log'](_0x3e3076[_0x26c437(0x198,'PHA(')]);return _0x3e3076;}catch(_0x48f905){_0x1b96ba++;if(_0x1b96ba===_0x522fc3)throw new Error('请求失败，已达到最大重试次数');if(_0x55a235[_0x26c437(0x19b,'KHTP')](_0x48f905[_0x26c437(0x160,'7&wn')],_0x55a235[_0x26c437(0x181,'jwVp')]))console['log'](_0x55a235[_0x26c437(0x1b2,'HRQh')]);else _0x48f905['response']?console['log'](_0x55a235[_0x26c437(0x11a,'taAK')]):console['log'](_0x26c437(0x156,'S!gB'));}}},_0x3cf510[_0x1c2790(0xf8,'yIAk')]=function(_0x2e22bc,_0x5b2bbe=null){try{return JSON['parse'](_0x2e22bc);}catch{return _0x5b2bbe;}},_0x3cf510[_0x1c2790(0x164,'7&wn')]=function(_0x378629,_0x49d99d=null){const _0x30e668=_0x1c2790;try{return JSON[_0x30e668(0x1d7,'eqo$')](_0x378629);}catch{return _0x49d99d;}},_0x3cf510['logs']=[],_0x3cf510[_0x1c2790(0x191,'jwVp')]=function(..._0x4f6c56){const _0x1da087=_0x1c2790;_0x3cf510[_0x1da087(0x13e,'Sww%')]=[..._0x3cf510[_0x1da087(0x154,'(meB')],..._0x4f6c56],console[_0x1da087(0x1a6,'!VV$')](_0x4f6c56[_0x1da087(0x155,'jwVp')]('\x0a'));},_0x3cf510[_0x1c2790(0x153,']ZiE')]=function(_0x37f4e3,_0x1a47fa){const _0x2e530f=_0x1c2790,_0xa306fc=_0x37f4e3;_0x3cf510[_0x2e530f(0x179,'tbIa')]('','❗️'+_0x3cf510[_0x2e530f(0x10c,'HkXk')]+',\x20错误!',_0xa306fc);},_0x3cf510[_0x1c2790(0x169,'HRQh')]=function(_0x2deead){return new Promise(_0x270af3=>setTimeout(_0x270af3,_0x2deead));},_0x3cf510['done']=function(){const _0x437b7b=_0x1c2790,_0x5f4d8e=new Date()[_0x437b7b(0x1af,']ZiE')](),_0x16cfea=_0x55a235['cluYr'](_0x5f4d8e,_0x3cf510['startTime'])/0x3e8;return console['log']('','🔔'+_0x3cf510[_0x437b7b(0x138,'4GIv')]+',\x20结束,\x20共运行了'+_0x16cfea[_0x437b7b(0x139,'x6dL')](0x2)+'\x20秒');},_0x3cf510;}var version_ = 'jsjiami.com.v7';