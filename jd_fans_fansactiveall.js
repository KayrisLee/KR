/*
粉丝福利红包一次性
cron:49 17,18 * * *
============Quantumultx===============
[task_local]
#粉丝福利红包一次性
49 17,18 * * * jd_fanshb.js, tag=粉丝福利红包一次性, enabled=true
 */

const $ = new Env('粉丝福利红包一次性');
var OＯ0$='jsjiami.com.v6',OＯ0$_=['‮OＯ0$'],O00O=[OＯ0$,'A8O1BMKFwpTDrMO+','w4czw4k=','6aG45Y6vw7bCg++8oA==','w4wswp9JXw==','w490wpXDlsOzPcKE','wqTCkMOLwr0N','w7hEbsKRTQ==','wr/Dj8Ojw6gXwrbCjQ==','W8K2wrLCtXYscw==','w5vDkMO+','VMK2wqXCvVs=','w5oUwq1Jwq1YXMK8G8Ow','HgcjSmctO8O2w7Yk','wo0pw43CrkDCiidQwrgX','woIvw6o=','c8K9Kw3CqE4=','wqobQ8KBw44=','w6nCs1FZw7c=','w5DCjsOpw60=','w4cdPcK1TAXDnsKU','wqFoX8Ko','wq1gT8Kmw6bDpzrDjw==','CD/DkWLCi3HCgnk=','w64cwrpl','wpJYY8KC','5a6m77216IyX5b+B776G','CsOhw7M=','L8KCT0rDuxA6MjHDoMKIwo7Ck8Kuw44Hw4E=','wpJnHjHCujdTwrELEA==','MRgNw5TDnSHDiHlpwpAPOsKJw4XDsmYhbcO4ZcO6w5rDhg3Cv8Kew73Cr8KSBjMowpgMIsKRwpFPwrBTw6cvH3zDrUHCp8OfdcO0w6LDpTHCmCdQEhRFGRfDkH3Cjysgw6LCqwoiIMKowrVaJcOdwpXDoFvCvkjDt8KX','w5/Dj8Odw7d0wpIE','SyQyRnMtCcOyw6l6fsOnXcKBMcKWw7jDpcOXZ8KlLcKmZRbDqMOEw6ArPGjCk8OfG8KEazdSelnDhRlGw4w2C8K9wpMybATCrcONKcKzD2XDucKPwpzDtATDuiDCm8KOw7RrwqjDucOgw699w6lld3HCu8KQcRLCqMOawoE=','wozCnsORwrMD','wrPDmADDisKw','P8KJCFDCsx49ODo=','SsOjwpo=','c0Etw4ocw73CkMKiw4FlCgrCrHPDjBjCgTDCnWLCisOmw7jCncO0wrXDjCDChMK/wr/DvR3DjsOVw7jCiMOLwrTDhsKcVl7Dvh0yw51XS8Ohw4wPGyTDpsKQfG9jPDc9w7RVMcKtwoZSw6l2wr7Cq8Kxw6bDr8O2w5ARBhNLdcORwrQ=','woTDn1fDgMKyEHbDmiVIfsKYwoNJT8Kcw7fCjcOVMVF2w7jDuWRHw6BGw64Ww4nCgyxKw7PCs1Znw7PDncObScK/wrYRw6XDtjNBwrfDqnTCnnnCvsK5w4x2wo1/w5YBw4HCtcKhw6YTC8OcTMO4GsOxd8OKw4M5K3NfWH7DmAPCuMKUNcK2w7rDiCvDgsOJw41GwoHCtsOpw7Vkw5nDjmfCscO3wqtXLcOOZ8OpDMO/bSgIwpEQScKBbcOlcMK8woZLO8KCw794OcO7JCwjPQY=','L8Oewrw=','6Kyx5YiJ6Zif5oWu5Z2Aw7wTQMKjTOi/h+WGouaiueS+j+aUieWHr+WvqxnlupforbnpgYzov7LohanmnrPljIDoj4PljpYywq/Dj8OSP8OY','wqTCjsOLw5xy','B8Oqw7gGaQ==','AMOTw4A=','JMKXQQ==','VgrDhw==','O1Mjw4o=','w7jDsMKpwpM9','JCFow4LDjQ==','LWF4EcKfX8KOajTCsw==','w7ACwqR7eA==','w4LDp8KowrXDjA==','JMOUwq8=','wq7DvsOyw6oowr3CrcKcwqJ4','w6jDlMOzFcOW','w7B9wrp7eA==','wqrCmcO3JBrDjA==','wpfCucOfMCc=','w7LCnsOxw40B','wpDDtMO1woDDkw==','w5RWwpU=','wpDCkRPChUd+w5vDjFB1','wpLDv8ORwrMD','GcKpdwo=','wpYNw4vCt0nDlUwawrwFw4ITJcOdJMOHw6XDmMKDRQRbwotswpF/wr0hwq/Cj33Co8OiwoZaYw1nwqbCgB7DncKUwrXCi8K/w7BJwpHCt24ww4B5W8Kfw5wjw54+AcO4w5PCszHDvTByasO6w6/CnMOTSsKIw6bCsRI0wr7CuHA=','Py3Dl3vCgH7Ciw==','HSbCnQ==','c0Etw4ocw73CkMKiw4FlCgrCrHPDjBjCgTDCnWLCisOmw7jCncO0wrXDjCDChMK/wr/DvR3DjsOVw7jCncOMwrDDg8K6aFzDqQAtw45GWsOpw5EQBjfDtcKbIy5bFzp5wqVKZMOqwpdSw5pawrXCqsOpwrbDscOmwoYcBk8ZJ8KA','ex5Kw78M','w6YlbsOuMg==','Tjk2w5Mt','woxYfcKcw5k=','w5DDt3R4wrTCs2o0wr8HdkDCssKVw4XCvsKRIcKBUcKmw6/DvsOqwrNQGkZVNHjCpBfDrEV/EynDlRzDg8K6w6YUw51xw5bDmmwPw43CkA50WMKkLsOPwqFOCV9gUMK7wp3DssOhHsOxLsOOwq0SRcKJYMOTfnLDrzs=','DsKuw7zCj8O9w4nDtA==','EDDCjWzDjEpxXXMSwoIiwpoSwp9Mw6vCjgbDicOTfMK6wqxUw7MAw4LDkTkaWRLDiz48w7Ruw4rDt8OHTiXDkkHCkMKVwpsGScOww6HCridvY8KqEcOAwoUhwpUnbk4xJ8KXw4A/wr4Qw53DgwhLDcOkw5XDoMK9HsOG','wrMWw4XCrlbCgwIaw75aw5xZacKaF8OAw6fCmcKHHVBxwq1cw4Ukw4Ilwq/CjnPDt8OfwrAbIUxKw7HCjxbDhsKewqfDtMKTw7Jew5jCjlhkw709C8Kxw54yw4AiacOuw5LCnTbDrGklNsOyw7PCi8KfGsOewq3DvDcYwqPCkQHCoQrDoMO8cgLDoMO3dSnDqyLDqcOzw7BsAVh4wqXCisKgfsOEwodEw7x8VlvChsKJwrcswq/CncKXaSLCk8KyOBVtYU3Crigcc0paNSrCvQ==','w5TDrGc=','V8K2wrzCuw==','wo1t5aea6LSPFljljYvlm6LDm8ON','w6nDklFZw7c=','5ayw77yZ6I2B5byq776s','w6bDsMOIw6w=','Flwow6s=','Py3Dh3U=','B8O0w7gG','AMOkF8KCwrjDocO7UAzCrcO2b8O+QX/Ck8KIwo0Ee3fDgcOfdDJbCcOywrjDlQXDnQ==','woRbfMOdw6jDrzYEdDRTAsKTcC09Nx3CpSpaQ8OueGfCmksOwo4Qewxw','UsKywrTCrh4je8KEw4vDmA==','w40Mwp/DqE9VVXrDpcKnfsOvRg==','asKKwozDiQ==','NyjDlWDCtSvChkxLQ8KqUcKeRR3Dj8KuwqfCtkHCgcOvwo7DrFgZw7Jzw4xMV1Rbw60Iw7HCvcOxwqwWw6cFVMKTw7XChsObw5HDsBZawoFEBULDscO5wojCnSphw7HClRDDimVFBcOJBcOiw6wYMnvDhMOfGMKSTgLDo8OWNXnChW5Dwp1LR0BqcjvDqiTDhGrDssKqwrV+w7Aiw7V4w50GfGllwq85woFmSsOAalPDsMKyOxhlXCIqw7fCvSnDuktNEylNQMKmYj0KV2fCpcO6WsKjY8OMw4nCuQlVQsOMw6kADBM=','wpDDtMKUw6HCsg==','wovDjcKGwolrw78=','aMKGwoDCj3w=','wq82w67CiHU=','wqHDhFnDmcKtRjjDmmcXYMOSw48OfMKbw7XDjMOFeRRHwofDhSpIw58Bw5ANw4nDkRpTwpfDlxFdwrPCtMOZRsK7w6xCw4vDsj4Ewo7DmDjDu2I=','Z3PCoUbDrQ==','ARtBdyo=','w6bCj8OWwpM9','wrrDi8Kz','w7PCoMKcEcK1wqwqwqRxWh8kLA==','acO3GsKEwr4=','woNgD8OWADlAPMKxcw==','wpLCnsKwwrNi','USbCmm3Dg1tm','wrYyS3HCpw==','wpJGfcKCw4c=','VcKzJ8Kiw6A8ezsW','w5fChcKuIQ==','w4vCnsKrwqXor4rmsoblpJXotaXvvrzorbrmo7TmnpjnvZjotrDpharorpM=','LlB4C8KA','wr8Pwr3CrSg=','Dg7DgiZ9','wq8owo/Dtwo=','w47DscOpwoxX','w6nCphvCmMOx','TsOifBnCiw==','5LqY5LmN5pyW5YiR5Zir6K+B6ZWO5peo5o6H5LuR56uO772+6K+n5qGc5p6p6Ia86Luf6K+75aSk572B57md5oGB5YaS','BcK8w5PCi8Ofw47Dvg==','wpbDisKYwo9nw68D','PFB5HQ==','w5zCmMOJw4rDjA==','Jyl/w4rDi8OQw5DDmg==','wpMTwq1JO1DClMOO','w4F6wpE=','5LqY5LmN5pyW5YiR5Zir6L6q5Zm+56ui5paZ5o6F','wobCvsKPwo9V','Z8O0OcKTw5cDX386TQ==','wqzDtcK3w5nDuHMISFbDjw==','w7hEEcKRMg==','w6Rsw6HDn8Ov','VcKXJ8Kiw7Q+Vjgcw6g=','ZR4rw79z','wrXCpsOiCBLDmzhdwppc','U8KewqvDoSVRw6DDgBZk','w659w5t7eA==','CCMefT7DsxTCtcOXw7w=','wrZTSw7DmA==','6aOY5Y+nQzzvv78=','wpcxwocL','w4YWNMK7YRA=','w6YVw68Q','ZR5Uw78=','w6M+L0Mt','PcOtwpfCl8O2','JS97','MC3DgHPCrQ==','DsOdw4TCrcOiwpvDlw==','w5HDgcOZ','GHBTw7DClQ==','GcO0w7h5aQ==','w6zDocKOw5Ng','wobCgGLDpg==','EWBbN8Kq','wo3DnMKgwoNvw6II','w7jDsMOWw6wj','MSPDkw==','5LmV5Lie5p225Yug5Zu/6K+p6ZeR5pao5oyT5LmP56u4772A6K285qKH5p6/6IWD6Lql6K6J5aW6572J57m/5oGm5YWJ','5Lul5Lmc5pyR5YiA5ZuN6L2l5Zmj56uF5pW95o6g','GcKpFmvCmA==','wqhTS3HDmA==','PcOtwpfDtsOo','AMKgw7jCocOKw5U=','w4IOEn94','wpVtHA==','w4Q3wrg=','wpdjFiQ=','wodrwqxFwrlZVsK2HMO6wos+','BCQfTHkt','wpfDi8KpIMKlwoYXwpBZeHQACw==','woxYQsOew6XDqQ==','D8OOw57CtsOTwprCnipf','fcOXBcKVw4kD','w5kxwqxI','w4wqwqk=','asKKwobDjBp2w7HDog==','OjHDpQ==','JsO4w7jCgsOiwrfDpgc=','woghw6HCkX0=','w4UbOQ==','Mlc6w4sTw6zChw==','woBmQ8Kmw6HDox3Drg==','ODrDpxNNw4kh','woklw7nChnlqDg==','w7vDrG9jwq7DrDZRwow=','wpMYw48=','w4obMcK1awE=','w5HDlsO1wqgJwr8=','FGNTIMOVA8O4Nw==','csOFJ8KJw4g=','44Op5o+S56WB44GQ6K2g5YSe6I6I5YyO5LuR5Lmp6Lak5Y675LqLJDXDhmVeGBLnmZfmjIbkvoPnlb3DhsKBfMOIw4p455iP5Lqf5LqD56yX5Yuk6I2n5Y2t','w4VhwoLDjcOFacOPwoFiGMKcw5vChsK5Hhx/wozCmV/CrBHDr8O8UcKrwpwYwrlTwovClMKqfsKcdW9Fwq3Di2lqcA==','GBEsw64=','Dm/Co0c=','w7TCtA4=','w73CtsO1w6A=','wpdQwplq','UMKdHXg=','wrfDkcKxw4DDsSxjAkfDiQsQaj8hB8OAw5liwrfChh9Ww5LDrxDCkhELYTtxGsObIcOpS8KtQcKywp0yew==','eMOBJcKdw5kO','wq8owo/CiA==','wrHDnMKJwp5Gw6oLYA==','ZQBKw6E=','DMO1E8KNwrk=','wr9dLsOhJw==','w7ACwqRlZg==','woXCtsKYwodzwqVJJQ==','SsKoMg==','wrPDh8Ojw6gcwrnChMKc','YzDCi3vDrE5qWQ==','w7wZYMKudVItU8OVLQ==','NizDnxhLw5Qu','MizDtA==','5LmH5LuD6Led5Yyb','N19uHcKd','w5nDlsO6wrciwqx9wrA=','YSJ+w4INH8ONw70=','Huitk+mGhuaViuebluW8s+iOrOWPjENGw6t/w43CvVvDqMODw7Ftw6d/w7cgcj9sw4Itw5gCUBPChsOawoPDoQtaw7cRARMqwpXClMOCwoLDl8K2wozDmcOT','w7LDocOvwqw=','w4Ivw6DDv8OEEg==','wo1CwqfDng==','wo3DgcKIwolw','w6HorKjphLbmlZznmYblvpHojpPljpbDk8OiWxZgOg==','w6bDrsOWw6w9','w4rDj8OXw6g=','w7gVwo5x','wr9wwr3CrQ==','RcOrBMK1w6I=','wrRkXcO+','B8Kqw6bClw==','wrBcOMOBPhtv','SwzDkz4=','Q8KpIw==','w7bCq8KMFQ==','CcKadw==','AsO/wpdyY8K3IMOS','wqoPwq8=','wojCkRjCkSRww4PDjEBp','K8KZUlnCvw==','ATg2','QMOv5aau6LeBwpnCh+WMj+WaswBG','wqVgQsKsw6TDqi4=','w7N1H8KxwrnDumPDlsKW','wp0ww6HCi2w=','DBIFYA==','O8KMVFPCuVc=','6K2K5YmR6Zix5oaT5ZyZwr4PwobDg0novqvlhpDmoaLkvKrmlJflhYLlr7zCpeW5oOisjumCvei/t+iHoOacteWNg+iOmOWPlQsfwr04woDDtQ==','w7bDlMOzdA==','wrQbQ8KB','DHzDpSA=','wqvCn8K9w5w=','wqvDoMK9wr0=','wpPDi8Op','QcK9PMK7wqJ7djgJw6cFPMKMTsKRw5PCtA==','wr1WL8O0chlrEMKJQg==','wrYyNBDDmA==','wodKf8OU','BGMfw6Aj','wpjDoXzDpsKP','w4jDtzjCpMOF','wqZSOMO3Og==','w4BmwpE=','WjB2w5U=','w6nCszBHw7c=','SsOPw4TCo8OJwpDDhSFAHg4kwrw5wp0aw43CnU3Ct8K0w5zDrMKQw4ZhH0rCscO/IjMBw4RWa8OVO33DicO5w69Rw6QYP1jCpFzDqcKrw7YlS8K1wqVCe8OQRcKiY8KvYMKfNzfCpAHCl8OOwo8Awr8zw7HCpMOpw6zCucKsw4YBBQ==','DAPDuyDClA==','wpcvwocLOg==','d8KIGsKaw58=','XCVvw4AwRMKPwrfCnsKawpoYdMKyLzkZakJzw7XDrVFZw5bCp11cw4InIEFdfMKcw7AjAcKqw4howq43w5Q1w7BDw647FsOYGSzDjcOXw5/DpXHCtsKGwoEywptPCsOLfQ==','w53Cq0s=','wpHDjMO6wrkCwqhmwrQlSAZfVMOVw7tJwo3DusKYBMKYw5nDuA/DicK4wo3ClCjDl8Kqwo5nZE/ClTHDt1R0wqo9w5PDpTHDkcKswpwDSsKOw7vCgsO/wqRcw63Ch3nCucO/Y2nDkQ/DqMOyc8OJw6QMwq0Kw7sVTEVPw4zCmMOyw6zDsMKj','IgYebEw=','B8K3d2vCmA==','w6DCo8Oqw6zCksOUwo/DlVk=','w5PDj8OTw7k=','w6nDsX3DoOisqeawvuWkpui3kO+8nOiukeaijuadnee/uui3j+mHkuisoQ==','ex4rw6Fz','woxYY8KCw4c=','wrHDgcOn','FiNJw7XCng==','LsOFV8Kh','wodKb8Oaw4TDojM=','ADYlQHU=','w4sVPcK1RwrDlw==','kjsnjLiNamRZi.coQmLQw.v6CfNDVOp=='];if(function(_0x324db5,_0x51ec39,_0x276068){function _0x1bd449(_0x182609,_0x5ca052,_0x4375d5,_0x38e789,_0x4b7d33,_0x3ad2d9){_0x5ca052=_0x5ca052>>0x8,_0x4b7d33='po';var _0x8ec562='shift',_0xc0618='push',_0x3ad2d9='‮';if(_0x5ca052<_0x182609){while(--_0x182609){_0x38e789=_0x324db5[_0x8ec562]();if(_0x5ca052===_0x182609&&_0x3ad2d9==='‮'&&_0x3ad2d9['length']===0x1){_0x5ca052=_0x38e789,_0x4375d5=_0x324db5[_0x4b7d33+'p']();}else if(_0x5ca052&&_0x4375d5['replace'](/[knLNRZQLQwCfNDVOp=]/g,'')===_0x5ca052){_0x324db5[_0xc0618](_0x38e789);}}_0x324db5[_0xc0618](_0x324db5[_0x8ec562]());}return 0x105a89;};return _0x1bd449(++_0x51ec39,_0x276068)>>_0x51ec39^_0x276068;}(O00O,0xa6,0xa600),O00O){OＯ0$_=O00O['length']^0xa6;};function O0QQ(_0x15a9c0,_0x3f38e6){_0x15a9c0=~~'0x'['concat'](_0x15a9c0['slice'](0x1));var _0xab6cad=O00O[_0x15a9c0];if(O0QQ['QQ0Q00']===undefined){(function(){var _0x218f5b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3610ca='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x218f5b['atob']||(_0x218f5b['atob']=function(_0x380c3f){var _0x291083=String(_0x380c3f)['replace'](/=+$/,'');for(var _0x335dda=0x0,_0x4dd1f2,_0x3a3e2f,_0x15fe30=0x0,_0x1ea395='';_0x3a3e2f=_0x291083['charAt'](_0x15fe30++);~_0x3a3e2f&&(_0x4dd1f2=_0x335dda%0x4?_0x4dd1f2*0x40+_0x3a3e2f:_0x3a3e2f,_0x335dda++%0x4)?_0x1ea395+=String['fromCharCode'](0xff&_0x4dd1f2>>(-0x2*_0x335dda&0x6)):0x0){_0x3a3e2f=_0x3610ca['indexOf'](_0x3a3e2f);}return _0x1ea395;});}());function _0x9f8d48(_0x3368db,_0x3f38e6){var _0x78317b=[],_0x49dea5=0x0,_0x14fc8e,_0x57a8f9='',_0x364469='';_0x3368db=atob(_0x3368db);for(var _0x2e1a35=0x0,_0x4bce83=_0x3368db['length'];_0x2e1a35<_0x4bce83;_0x2e1a35++){_0x364469+='%'+('00'+_0x3368db['charCodeAt'](_0x2e1a35)['toString'](0x10))['slice'](-0x2);}_0x3368db=decodeURIComponent(_0x364469);for(var _0x48754e=0x0;_0x48754e<0x100;_0x48754e++){_0x78317b[_0x48754e]=_0x48754e;}for(_0x48754e=0x0;_0x48754e<0x100;_0x48754e++){_0x49dea5=(_0x49dea5+_0x78317b[_0x48754e]+_0x3f38e6['charCodeAt'](_0x48754e%_0x3f38e6['length']))%0x100;_0x14fc8e=_0x78317b[_0x48754e];_0x78317b[_0x48754e]=_0x78317b[_0x49dea5];_0x78317b[_0x49dea5]=_0x14fc8e;}_0x48754e=0x0;_0x49dea5=0x0;for(var _0x3e0e86=0x0;_0x3e0e86<_0x3368db['length'];_0x3e0e86++){_0x48754e=(_0x48754e+0x1)%0x100;_0x49dea5=(_0x49dea5+_0x78317b[_0x48754e])%0x100;_0x14fc8e=_0x78317b[_0x48754e];_0x78317b[_0x48754e]=_0x78317b[_0x49dea5];_0x78317b[_0x49dea5]=_0x14fc8e;_0x57a8f9+=String['fromCharCode'](_0x3368db['charCodeAt'](_0x3e0e86)^_0x78317b[(_0x78317b[_0x48754e]+_0x78317b[_0x49dea5])%0x100]);}return _0x57a8f9;}O0QQ['QQ00OO']=_0x9f8d48;O0QQ['QQ0QQ0']={};O0QQ['QQ0Q00']=!![];}var _0x46f7d7=O0QQ['QQ0QQ0'][_0x15a9c0];if(_0x46f7d7===undefined){if(O0QQ['QQ00OQ']===undefined){O0QQ['QQ00OQ']=!![];}_0xab6cad=O0QQ['QQ00OO'](_0xab6cad,_0x3f38e6);O0QQ['QQ0QQ0'][_0x15a9c0]=_0xab6cad;}else{_0xab6cad=_0x46f7d7;}return _0xab6cad;};const notify=$['isNode']()?require(O0QQ('‫0','cdUC')):'';const jdCookieNode=$[O0QQ('‫1','g][I')]()?require(O0QQ('‫2','(V*9')):'';CryptoJS=$[O0QQ('‫3','ONkz')]()?require(O0QQ('‮4','(#X(')):CryptoJS;let cookiesArr=[],cookie='';if($[O0QQ('‮5','aDiC')]()){Object['keys'](jdCookieNode)['forEach'](Q0O00=>{cookiesArr[O0QQ('‮6','cdUC')](jdCookieNode[Q0O00]);});if(process[O0QQ('‮7','cdUC')][O0QQ('‫8','DI#h')]&&process[O0QQ('‫9','xnH7')][O0QQ('‫a','(#X(')]===O0QQ('‮b','(IhC'))console[O0QQ('‮c','mTuu')]=()=>{};}else{cookiesArr=[$[O0QQ('‫d','ISO%')](O0QQ('‮e','tVtb')),$[O0QQ('‫f','xnH7')]('CookieJD2'),...jsonParse($[O0QQ('‫10','(IhC')](O0QQ('‮11','#8ql'))||'[]')[O0QQ('‫12','2Fz6')](O0QQO=>O0QQO[O0QQ('‮13','mTuu')])][O0QQ('‫14','KO#d')](O0Q0O=>!!O0Q0O);}let activityId=O0QQ('‮15','OXha');let time=Date['now']();let allMessage='';!(async()=>{var O00OO={'QQQQ':function(O0Q00,Q0OQO){return O0Q00(Q0OQO);},'OOOQ':function(Q0O0O,QO000){return Q0O0O===QO000;},'Q0QO':O0QQ('‮16','aDiC'),'Q0QQ':O0QQ('‮17','r*)C'),'OOQ0':O0QQ('‫18','RIaK'),'Q00O':function(QOQ0O,QOQQQ){return QOQ0O===QOQQQ;},'O0QO0':O0QQ('‮19','w7!J'),'QOOOQ':function(QQOOQ,QO0Q0){return QQOOQ+QO0Q0;},'QQO0Q':function(QOQQO){return QOQQO();},'QOOOO':O0QQ('‮1a','xnH7')};if(!cookiesArr[0x0]){$[O0QQ('‫1b','tDA!')]($[O0QQ('‫1c','HvL1')],O00OO[O0QQ('‮1d','I9%U')],O00OO[O0QQ('‫1e','L[FQ')],{'open-url':O0QQ('‮1f','umsl')});return;}for(let QOQ0Q=0x0;QOQ0Q<cookiesArr[O0QQ('‮20','aDiC')];QOQ0Q++){if(cookiesArr[QOQ0Q]){if(O00OO['Q00O'](O0QQ('‮21','2Fz6'),O00OO['O0QO0'])){cookie=cookiesArr[QOQ0Q];$[O0QQ('‫22','hwRs')]=O00OO[O0QQ('‫23','ul1V')](decodeURIComponent,cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie[O0QQ('‫24','FWxN')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[O0QQ('‮25','q%yb')]=O00OO[O0QQ('‮26','2r0J')](QOQ0Q,0x1);$['isLogin']=!![];$[O0QQ('‫27','S[Bd')]='';message='';console[O0QQ('‮28','dLC@')]('\x0a******开始【京东账号'+$['index']+'】'+($[O0QQ('‮29','H]hl')]||$[O0QQ('‫2a','$zAO')])+O0QQ('‫2b','q%yb'));if(!$[O0QQ('‮2c','xnH7')]){$[O0QQ('‮2d','xnH7')]($['name'],'【提示】cookie已失效',O0QQ('‮2e','S[Bd')+$[O0QQ('‫2f','OXha')]+'\x20'+($[O0QQ('‫30','KO#d')]||$[O0QQ('‮31','ul1V')])+O0QQ('‫32','aDiC'),{'open-url':O00OO[O0QQ('‮33','BGvj')]});if($[O0QQ('‮34','&o4D')]()){await notify['sendNotify']($[O0QQ('‮35','rufR')]+'cookie已失效\x20-\x20'+$['UserName'],'京东账号'+$[O0QQ('‫36','hwRs')]+'\x20'+$['UserName']+O0QQ('‫37','S[Bd'));}continue;}await O00OO[O0QQ('‫38','KO#d')](main);await $[O0QQ('‫39','BGvj')](0x7d0);}else{O00OO[O0QQ('‮3a','cdUC')](resolve,data||{});}}}if(allMessage){if(O00OO[O0QQ('‫3b','(IhC')](O00OO[O0QQ('‮3c','aDiC')],O0QQ('‮3d','ONkz'))){Object[O0QQ('‫3e','VyG^')](jdCookieNode)[O0QQ('‫3f','q%yb')](OQO0=>{cookiesArr[O0QQ('‫40','Il8y')](jdCookieNode[OQO0]);});if(process[O0QQ('‮41','dLC@')]['JD_DEBUG']&&O00OO[O0QQ('‮42','(V*9')](process[O0QQ('‫43','y3z6')][O0QQ('‫44','xSKW')],O00OO['Q0QO']))console[O0QQ('‮45','I9%U')]=()=>{};}else{if($['isNode']())await notify[O0QQ('‫46','VrQ4')](''+$['name'],''+allMessage);$['msg']($['name'],'',allMessage);}}})()[O0QQ('‫47','wiCN')](QQOOO=>{$[O0QQ('‫48','g][I')]('','❌\x20'+$['name']+O0QQ('‫49','VyG^')+QQOOO+'!','');})[O0QQ('‮4a','tVtb')](()=>{$['done']();});async function main(){var Q0OQQ={'OQOQ0':O0QQ('‫4b','tVtb'),'OO0QO':function(Q0O0Q){return Q0O0Q();},'QQOQQ':function(O00OQ){return O00OQ();}};var O0QQ0=Q0OQQ['OQOQ0'][O0QQ('‫4c','(IhC')]('|'),O0QOO=0x0;while(!![]){switch(O0QQ0[O0QOO++]){case'0':await Q0OQQ['OO0QO'](query_tempactivconfig);continue;case'1':await query_activetemporary();continue;case'2':await Q0OQQ['QQOQQ'](draw_activetemporary);continue;case'3':await $[O0QQ('‫4d','n61@')](0x1f4);continue;case'4':await $['wait'](0x1f4);continue;}break;}}function query_tempactivconfig(){var O0QOQ={'QQOQO':function(QO0QQ,QOOO0){return QO0QQ==QOOO0;},'Q0QOQ':O0QQ('‮4e','wiCN'),'Q00O0':O0QQ('‫4f','BGvj'),'OQOOQ':O0QQ('‫50','(V*9'),'OOQQO':O0QQ('‮51','ONkz'),'OO0Q0':function(QO00Q,QO0QO){return QO00Q===QO0QO;},'OQOOO':'QQOQ','Q00OQ':'QO0O','Q00OO':O0QQ('‮52','@!!i'),'O0OQO':function(QO00O,OOOOQ){return QO00O+OOOOQ;},'O0O0O':function(OOOOO,OQO0Q){return OOOOO!==OQO0Q;},'Q0QQ0':O0QQ('‮53','hwRs'),'O0OQQ':function(OQOQQ,OQO0O){return OQOQQ(OQO0O);},'Q0Q00':function(QQO00,OQOQO){return QQO00||OQOQO;},'QQQOQ':O0QQ('‮54','hwRs'),'QOO0Q':O0QQ('‫55','(V*9'),'QOO0O':O0QQ('‫56','dLC@'),'QQQOO':'zh-cn','QOOQQ':O0QQ('‫57','q%yb'),'QQ0O0':'wq.jd.com'};return new Promise(async QQOQ0=>{var Q0QO0={'OOQ0Q':function(O00O0,O0Q0QO){return O0QOQ[O0QQ('‮58','r*)C')](O00O0,O0Q0QO);},'OOQ0O':O0QQ('‮59','ONkz')};if(O0QOQ[O0QQ('‫5a','ISO%')]!==O0QOQ[O0QQ('‫5b','@0!6')]){if(O0QOQ['QQOQO'](typeof str,O0QOQ[O0QQ('‮5c','tDA!')])){try{return JSON[O0QQ('‮5d','q%yb')](str);}catch(O00OOQ){console['log'](O00OOQ);$[O0QQ('‫5e','RIaK')]($[O0QQ('‫5f','ul1V')],'',O0QOQ[O0QQ('‮60','#8ql')]);return[];}}}else{const QOO00O={'url':'https://wq.jd.com/activet2/looktreasure/query_tempactivconfig?uuid='+activityId+'&_='+time+O0QQ('‫61','(#X('),'headers':{'Accept':O0QOQ[O0QQ('‫62','@!!i')],'Accept-Encoding':O0QOQ[O0QQ('‫63','I9%U')],'Accept-Language':O0QOQ['QQQOO'],'Connection':O0QOQ[O0QQ('‮64','dLC@')],'Cookie':cookie,'Host':O0QOQ['QQ0O0'],'Referer':O0QQ('‫65','ul1V')+activityId+O0QQ('‮66','VrQ4')+time+O0QQ('‫67','KO#d'),'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.1\x20Mobile/15E148\x20Safari/604.1'}};$['get'](QOO00O,(QOO0QQ,QOOOO0,O00OOO)=>{if(O0QOQ[O0QQ('‮68','g][I')]===O0QOQ[O0QQ('‫69','wiCN')]){console[O0QQ('‮45','I9%U')](''+JSON[O0QQ('‫6a','HvL1')](QOO0QQ));console[O0QQ('‫48','g][I')]($[O0QQ('‫6b','BGvj')]+O0QQ('‫6c','@0!6'));}else{try{if(O0QOQ[O0QQ('‫6d','ul1V')](O0QOQ[O0QQ('‮6e','tVtb')],O0QOQ['OQOOO'])){if(QOO0QQ){console[O0QQ('‫6f','H]hl')](QOO0QQ);}else{if(O0QOQ[O0QQ('‮70','P!1i')](O0QOQ['Q00OQ'],O0QQ('‫71','FWxN'))){$[O0QQ('‫72','ONkz')]=O00OOO[O0QQ('‫73','g][I')](/"backEnd":"(.+?)"/);if($['backEnd']){$[O0QQ('‫74','mTuu')]=$[O0QQ('‫75','FWxN')][0x1];}console[O0QQ('‮76','&o4D')](O0QQ('‫77','2Fz6')+$['backEnd']);}else{$['backEnd']=O00OOO[O0QQ('‮78','2r0J')](/"backEnd":"(.+?)"/);if($[O0QQ('‮79','RIaK')]){if(O0QOQ[O0QQ('‮7a','S[Bd')](O0QOQ['Q00OO'],O0QOQ[O0QQ('‮7b','mTuu')])){$['backEnd']=$[O0QQ('‮7c','H]hl')][0x1];}else{QQOQ0(O00OOO||{});}}console['log'](O0QOQ['O0OQO']('领取ID：',$[O0QQ('‮7d','7je&')]));}}}else{if(QOO0QQ){console[O0QQ('‫7e','KO#d')](QOO0QQ);}else{$['sPrizeDesc']=O00OOO[O0QQ('‮7f','7je&')](/"sPrizeDesc":"(.+?)"/);if($[O0QQ('‮80','cdUC')]){$[O0QQ('‫81','g][I')]=$[O0QQ('‫82','2Fz6')][0x1];console[O0QQ('‫83','(IhC')](Q0QO0['OOQ0Q']('宝，获得：',$['sPrizeDesc']));}}}}catch(QQQOQO){$[O0QQ('‮84','L[FQ')](QQQOQO,QOOOO0);}finally{if(O0QOQ[O0QQ('‮85','ONkz')](O0QOQ[O0QQ('‫86','#8ql')],O0QQ('‫87','oBd5'))){O0QOQ['O0OQQ'](QQOQ0,O0QOQ['Q0Q00'](O00OOO,{}));}else{$[O0QQ('‫88','mTuu')]=O00OOO[Q0QO0['OOQ0O']]&&O00OOO[O0QQ('‫89','tVtb')][O0QQ('‫8a','tVtb')]||$[O0QQ('‮8b','@!!i')];}}}});}});}function query_activetemporary(){var QOOQQQ={'OQ0QO':function(QOOQ0Q,O0QQQQ){return QOOQ0Q==O0QQQQ;},'OQ00O':O0QQ('‮8c','2r0J'),'QOOQO':function(O0Q000,O0QQ0O){return O0Q000===O0QQ0O;},'Q0000':O0QQ('‫8d','tVtb'),'Q00Q0':function(O0QQ0Q,O0QOOO){return O0QQ0Q+O0QOOO;},'Q0QQO':O0QQ('‮8e','Il8y'),'O0OQ0':'QOOQ','Q0Q0O':function(QOO0Q0,QOOQQO){return QOO0Q0(QOOQQO);},'O0O00':O0QQ('‮8f','DI#h'),'Q0Q0Q':O0QQ('‮90','wiCN'),'O0OOQ':O0QQ('‮91','r*)C')};return new Promise(async QOOQ0O=>{const QOO000={'url':O0QQ('‫92','P!1i')+$[O0QQ('‮93','BGvj')]+'&_='+time+O0QQ('‮94','g][I'),'headers':{'Accept':QOOQQQ['O0O00'],'Accept-Encoding':QOOQQQ[O0QQ('‮95','H]hl')],'Accept-Language':O0QQ('‫96','@0!6'),'Connection':QOOQQQ['O0OOQ'],'Cookie':cookie,'Host':O0QQ('‮97','wiCN'),'Referer':'https://wq.jd.com/activet2/looktreasure/query_activetemporary?sceneval=2&backendId='+$['backEnd']+O0QQ('‫98','(#X(')+time+O0QQ('‮99','ISO%'),'User-Agent':O0QQ('‫9a','@0!6')}};$[O0QQ('‮9b','xSKW')](QOO000,(O00O00,O00OQO,O00O0O)=>{var QOOQ00={'OO0OQ':O0QQ('‮9c','iqx]'),'OQ00Q':function(QOO0OQ,O0Q0QQ){return QOOQQQ['OQ0QO'](QOO0OQ,O0Q0QQ);}};try{if(O00O00){if(QOOQQQ[O0QQ('‫9d','S[Bd')]===QOOQQQ[O0QQ('‮9e','xSKW')]){console[O0QQ('‫9f','(#X(')](O00O00);}else{try{return JSON['parse'](str);}catch(O0QOO0){console[O0QQ('‫a0','wiCN')](O0QOO0);$[O0QQ('‮a1','Il8y')]($[O0QQ('‫a2','ISO%')],'',QOOQ00[O0QQ('‫a3','KO#d')]);return[];}}}else{$['sPrizeDesc']=O00O0O[O0QQ('‫a4','w7!J')](/"sPrizeDesc":"(.+?)"/);if($[O0QQ('‫a5','OXha')]){if(QOOQQQ[O0QQ('‫a6','2r0J')]('OQ0Q',QOOQQQ[O0QQ('‫a7','HvL1')])){if(O00O00){console[O0QQ('‮a8','xSKW')](O00O00);}else{}}else{$[O0QQ('‫a9','H]hl')]=$['sPrizeDesc'][0x1];console[O0QQ('‮c','mTuu')](QOOQQQ[O0QQ('‫aa','(V*9')](QOOQQQ[O0QQ('‫ab','2r0J')],$['sPrizeDesc']));}}}}catch(O0QOQ0){$[O0QQ('‮ac','iqx]')](O0QOQ0,O00OQO);}finally{if(QOOQQQ[O0QQ('‮ad','iqx]')](QOOQQQ[O0QQ('‫ae','BGvj')],'QOOQ')){QOOQQQ['Q0Q0O'](QOOQ0O,O00O0O||{});}else{if(QOOQ00[O0QQ('‮af','umsl')](typeof JSON['parse'](O00O0O),'object')){return!![];}}}});});}function draw_activetemporary(){var QOQQO0={'QQQ00':'OQQQ','QQQQ0':function(QO0QOQ,O00OQQ){return QO0QOQ(O00OQQ);},'OO0O0':function(O00O0Q,QOOOQ0){return O00O0Q||QOOOQ0;},'OQQ0Q':function(QQQOOO,QQQ00Q){return QQQOOO!==QQQ00Q;},'OOQOO':O0QQ('‫b0','2Fz6'),'OQ000':'gzip,\x20deflate,\x20br','OQQQQ':O0QQ('‫b1','VrQ4'),'OQQ0O':'wq.jd.com'};return new Promise(async QO00OO=>{if(QOQQO0[O0QQ('‮b2','H]hl')](O0QQ('‫b3','wiCN'),'Q0OO')){const QO0QQ0={'url':O0QQ('‫b4','2Fz6')+$[O0QQ('‫b5','@!!i')]+O0QQ('‫b6','Il8y')+time+O0QQ('‫b7','ISO%'),'headers':{'Accept':QOQQO0[O0QQ('‮b8','ul1V')],'Accept-Encoding':QOQQO0[O0QQ('‮b9','mTuu')],'Accept-Language':O0QQ('‫ba','ul1V'),'Connection':QOQQO0[O0QQ('‫bb','tVtb')],'Cookie':cookie,'Host':QOQQO0['OQQ0O'],'Referer':O0QQ('‫bc','#8ql')+$[O0QQ('‫bd','VyG^')]+'&_='+time+O0QQ('‫be','$zAO'),'User-Agent':O0QQ('‫bf','2Fz6')}};$['get'](QO0QQ0,(QOOOOQ,QO0Q00,O0QOOQ)=>{try{if(QOOOOQ){console[O0QQ('‫6f','H]hl')](QOOOOQ);}else{}}catch(QQ0OQO){if(QOQQO0['QQQ00']!=='QO00'){$['logErr'](QQ0OQO,QO0Q00);}else{$[O0QQ('‮c0','#8ql')]('','❌\x20'+$[O0QQ('‫c1','7je&')]+O0QQ('‮c2','2r0J')+QQ0OQO+'!','');}}finally{QOQQO0[O0QQ('‮c3','#8ql')](QO00OO,QOQQO0['OO0O0'](O0QOOQ,{}));}});}else{cookiesArr['push'](jdCookieNode[item]);}});}function TotalBean(){var O0QOQO={'QOQOO':O0QQ('‮c4','RIaK'),'QO0O0':function(QQ0O0Q,O0QOQQ){return QQ0O0Q===O0QOQQ;},'QQQQQ':'retcode','QQ000':O0QQ('‫c5','KO#d'),'QQQ0O':O0QQ('‮c6','P!1i'),'OOQO0':O0QQ('‮c7','@!!i'),'OQ0OQ':'OQQ0','QOQOQ':O0QQ('‫c8','xSKW'),'OQ0OO':function(O0QO0O){return O0QO0O();},'OQQQ0':function(QOOOOO,QO0QO0){return QOOOOO==QO0QO0;},'QQQQO':function(QQQO00,QQQOQ0){return QQQO00+QQQOQ0;},'QQ0Q0':O0QQ('‮c9','FWxN'),'Q0OOO':O0QQ('‮ca','ONkz'),'Q0OOQ':O0QQ('‮cb','7je&'),'O000Q':function(QQQOOQ,QOO00Q){return QQQOOQ(QOO00Q);},'O0OO0':O0QQ('‮cc','rufR'),'O0000':O0QQ('‫cd','DI#h'),'O0QQQ':O0QQ('‫ce','@!!i')};return new Promise(async QO0QOO=>{var QO00O0={'Q000Q':function(QQ0OO0,QQ00QQ){return O0QOQO[O0QQ('‮cf','umsl')](QQ0OO0,QQ00QQ);},'Q00QQ':O0QQ('‮d0','hwRs'),'Q0OO0':function(QQ000Q,O00QOO){return O0QOQO[O0QQ('‫d1','7je&')](QQ000Q,O00QOO);},'O0OOO':O0QOQO[O0QQ('‮d2','2Fz6')]};const QQQQQO={'url':O0QQ('‫d3','@0!6'),'headers':{'Accept':O0QOQO['QQ0Q0'],'Content-Type':O0QOQO[O0QQ('‮d4','$zAO')],'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':O0QQ('‫d5','n61@'),'Connection':O0QOQO[O0QQ('‮d6','KO#d')],'Cookie':cookie,'Referer':'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','User-Agent':$[O0QQ('‫1','g][I')]()?process[O0QQ('‫d7','umsl')][O0QQ('‮d8','(V*9')]?process[O0QQ('‮7','cdUC')]['JD_USER_AGENT']:O0QOQO['O000Q'](require,O0QOQO[O0QQ('‫d9','dLC@')])[O0QQ('‫da','q%yb')]:$['getdata'](O0QOQO[O0QQ('‮db','H]hl')])?$[O0QQ('‫dc','$zAO')](O0QOQO[O0QQ('‫dd','r*)C')]):O0QOQO['O0QQQ']}};$['post'](QQQQQO,(O000O0,QQQQ0O,QQQ000)=>{var QQQ0Q0={'O000O':function(O00QOQ,QQQ0OQ){return O00QOQ+QQQ0OQ;},'O00QO':O0QOQO[O0QQ('‮de','tVtb')]};try{if(O000O0){console['log'](''+JSON[O0QQ('‮df','dLC@')](O000O0));console[O0QQ('‮c0','#8ql')]($[O0QQ('‫e0','(V*9')]+O0QQ('‫e1','S[Bd'));}else{if(QQQ000){QQQ000=JSON[O0QQ('‫e2','OXha')](QQQ000);if(O0QOQO[O0QQ('‫e3','(IhC')](QQQ000[O0QOQO[O0QQ('‮e4','xnH7')]],0xd)){if(O0QOQO[O0QQ('‫e5','2Fz6')]===O0QOQO['QQQ0O']){try{if(QO00O0[O0QQ('‮e6','oBd5')](typeof JSON[O0QQ('‮e7','tDA!')](QQQ000),QO00O0[O0QQ('‮e8','L[FQ')])){return!![];}}catch(O0OOOO){console['log'](O0OOOO);console['log'](O0QQ('‮e9','ul1V'));return![];}}else{$[O0QQ('‮ea','VyG^')]=![];return;}}if(QQQ000[O0QQ('‫eb','hwRs')]===0x0){$['nickName']=QQQ000[O0QQ('‫ec','OXha')]&&QQQ000[O0QOQO[O0QQ('‮ed','HvL1')]][O0QQ('‫ee','w7!J')]||$[O0QQ('‫ef','I9%U')];}else{$[O0QQ('‫30','KO#d')]=$['UserName'];}}else{console[O0QQ('‫f0','RIaK')](O0QQ('‮f1','ul1V'));}}}catch(O0OOOQ){if(O0QOQO['OQ0OQ']!==O0QOQO['OQ0OQ']){$['sPrizeDesc']=QQQ000[O0QQ('‫f2','S[Bd')](/"sPrizeDesc":"(.+?)"/);if($[O0QQ('‫f3','aDiC')]){$[O0QQ('‫81','g][I')]=$[O0QQ('‫f4','umsl')][0x1];console['log'](QO00O0[O0QQ('‮f5','mTuu')](QO00O0[O0QQ('‫f6','&o4D')],$[O0QQ('‫f7','dLC@')]));}}else{$[O0QQ('‮84','L[FQ')](O0OOOQ,QQQQ0O);}}finally{if(O0QOQO[O0QQ('‮f8','ul1V')]('Q00Q',O0QOQO['QOQOQ'])){$[O0QQ('‮f9','iqx]')]=$[O0QQ('‫fa','DI#h')][0x1];console['log'](QQQ0Q0['O000O'](QQQ0Q0[O0QQ('‫fb','2r0J')],$[O0QQ('‮fc','n61@')]));}else{O0QOQO[O0QQ('‮fd','r*)C')](QO0QOO);}}});});}function safeGet(QQ0OOQ){var O0OOQO={'Q0OQ0':function(O00Q00,O000OO){return O00Q00+O000OO;},'QO0OO':O0QQ('‮fe','OXha'),'QQOO0':function(O000OQ,O00QQ0){return O000OQ===O00QQ0;},'QQ0QQ':O0QQ('‮ff','I9%U'),'OOO0Q':function(QQQ0QQ,QQQOO0){return QQQ0QQ==QQQOO0;},'QO0OQ':O0QQ('‮100','mTuu'),'OQQOQ':function(QQQ00O,QQQ0QO){return QQQ00O===QQQ0QO;},'OQQOO':O0QQ('‫101','cdUC'),'OOO0O':O0QQ('‫102','ul1V')};try{if(O0OOQO[O0QQ('‫103','^J]p')]('O0OQ',O0OOQO[O0QQ('‮104','(#X(')])){if(err){console[O0QQ('‫105','w7!J')](err);}else{$['backEnd']=QQ0OOQ[O0QQ('‮106','@!!i')](/"backEnd":"(.+?)"/);if($[O0QQ('‫b5','@!!i')]){$['backEnd']=$[O0QQ('‫107','(#X(')][0x1];}console[O0QQ('‮108','BGvj')](O0OOQO[O0QQ('‮109','w7!J')](O0OOQO[O0QQ('‫10a','xSKW')],$['backEnd']));}}else{if(O0OOQO['OOO0Q'](typeof JSON['parse'](QQ0OOQ),O0OOQO[O0QQ('‫10b','BGvj')])){if(O0OOQO['OQQOQ'](O0QQ('‫10c','@0!6'),O0OOQO[O0QQ('‮10d','OXha')])){$[O0QQ('‫10e','hwRs')]=![];return;}else{return!![];}}}}catch(O0OOQ0){if(O0OOQO[O0QQ('‮10f','KO#d')]===O0OOQO['OOO0O']){console[O0QQ('‮110','@!!i')](O0OOQ0);console['log'](O0QQ('‮111','r*)C'));return![];}else{console['log'](O0QQ('‫112','w7!J'));}}}function jsonParse(QQ0OQ0){var O0QQO0={'OOOQO':'string','QQ0QO':function(QQ0O00,Q0O0O0){return QQ0O00!==Q0O0O0;},'QQ00O':'OO0O'};if(typeof QQ0OQ0==O0QQO0['OOOQO']){try{if(O0QQO0[O0QQ('‫113','wiCN')](O0QQO0[O0QQ('‫114','r*)C')],O0QQO0[O0QQ('‮115','(#X(')])){$[O0QQ('‮116','VyG^')](e,resp);}else{return JSON[O0QQ('‫117','^J]p')](QQ0OQ0);}}catch(Q0OQOO){console[O0QQ('‮118','r*)C')](Q0OQOO);$[O0QQ('‫119','cdUC')]($[O0QQ('‮11a','r*)C')],'','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie');return[];}}};OＯ0$='jsjiami.com.v6';

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }