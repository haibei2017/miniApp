//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    width:300,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,

    pageHomeHeadList:[
      {
        id:0,
        isClick:true,
        name:"推荐"
      },
      {
        id: 1,
        isClick: false,
        name: "服饰"
      },
      {
        id: 2,
        isClick: false,
        name: "鞋包"
      },
      {
        id: 3,
        isClick: false,
        name: "装备"
      },
      {
        id: 4,
        isClick: false,
        name: "运动"
      },
      {
        id: 5,
        isClick: false,
        name: "旅行"
      }
    ],
    pageHomeList_3: ["正品保证", "专业精选", "15天无理由退货"],
    pageHomeList_4: [
      {
        url:"../category/category",
        urlImg:"../../image/search/jianhuo@2x.png",
          name:"品牌尖货"
     },
      {
        url: "",
        urlImg: "../../image/search/remai@2x.png",
        name: "热卖活动"
      },
      {
        url: "",
        urlImg: "../../image/search/xinpin@2x.png",
        name: "新品"
      },
      {
        url: "",
        urlImg: "../../image/search/miaofa@2x.png",
        name: "秒发"
      },
      {
        url: "",
        urlImg: "../../image/search/youhui@2x.png",
        name: "优惠"
      }
    ],
    pageHomeList_6:[
          {
            id:0,
            url:"",
            urlImg:"http://img4.imgtn.bdimg.com/it/u=2249499031,1599942237&fm=27&gp=0.jpg"
          },
          {
            id: 1,
            url: "",
            urlImg: "http://img4.imgtn.bdimg.com/it/u=2249499031,1599942237&fm=27&gp=0.jpg"
          },
          {
            id: 2,
            url: "",
            urlImg: "http://img4.imgtn.bdimg.com/it/u=2249499031,1599942237&fm=27&gp=0.jpg"
          },
          {
            id: 3,
            url: "",
            urlImg: "http://img4.imgtn.bdimg.com/it/u=2249499031,1599942237&fm=27&gp=0.jpg"
          },
          {
            id: 4,
            url: "",
            urlImg: "http://img4.imgtn.bdimg.com/it/u=2249499031,1599942237&fm=27&gp=0.jpg"
          }
    ],
    pageHomeList_7_1: [
      {
        id: 0,
        url: "",
        urlImg: "http://img4.imgtn.bdimg.com/it/u=2249499031,1599942237&fm=27&gp=0.jpg"
      },
      {
        id: 1,
        url: "",
        urlImg: "http://img4.imgtn.bdimg.com/it/u=398315614,858433818&fm=27&gp=0.jpg"
      },
      {
        id: 2,
        url: "",
        urlImg: "http://img1.imgtn.bdimg.com/it/u=3168720434,3207030681&fm=27&gp=0.jpg"
      },
      {
        id: 3,
        url: "",
        urlImg: "http://img1.imgtn.bdimg.com/it/u=2152858265,3329318712&fm=27&gp=0.jpg"
      }
    ],
    pageHomeList_7_goods: [
      {
        id: 48616,
        goodsPic: "http://img0.imgtn.bdimg.com/it/u=1823253198,3252158668&fm=27&gp=0.jpg",
        gbName: "MUZTAGA慕士塔格",
        goodsName: "MUZTAGA/慕士塔格  户外多功能秋冬可套穿保暖防风抓绒衣服  男女",
        goodsNo: "MG77059M/MG77060W",
        goodsVipPrice: 103,
        goodsTagPrice: 258,
        goodsRebateprice: 30.8,
        rebatePoints: null,
        isOnshelves: null,
        cateName: null
      },
      {
        id: 48617,
        goodsPic: "http://img1.imgtn.bdimg.com/it/u=3717050611,1044405286&fm=27&gp=0.jpg",
        gbName: "PELLIOT/伯希和",
        goodsName: "PELLIOT/伯希和  户外皮肤衣男女夏超轻超薄透气防晒衣服情侣皮肤风衣",
        goodsNo: "MG77059M/MG77060W",
        goodsVipPrice: 159,
        goodsTagPrice: 628,
        goodsRebateprice: 30.8,
        rebatePoints: null,
        isOnshelves: null,
        cateName: null
      },
      {
        id: 48618,
        goodsPic: "http://img3.imgtn.bdimg.com/it/u=1505379788,335683567&fm=27&gp=0.jpg",
        gbName: "SAIDANHU/赛丹狐",
        goodsName: "SAIDANHU/赛丹狐   情侣款  运动套装休闲衣套装春秋装韩版外套男装开衫衣服潮",
        goodsNo: "MG77059M/MG77060W",
        goodsVipPrice: 128,
        goodsTagPrice: 298,
        goodsRebateprice: 30.8,
        rebatePoints: null,
        isOnshelves: null,
        cateName: null
      },
      {
        id: 48619,
        goodsPic: "http://img0.imgtn.bdimg.com/it/u=902185794,3892440688&fm=27&gp=0.jpg",
        gbName: "CENPIN/诚品",
        goodsName: "CENPIN/诚品  新款紧身健身服男 跑步 瑜伽训练套装女春秋显瘦情侣运动衣服",
        goodsNo: "MG77059M/MG77060W",
        goodsVipPrice: 188,
        goodsTagPrice: 738,
        goodsRebateprice: 30.8,
        rebatePoints: null,
        isOnshelves: null,
        cateName: null
      }
    ]






  },
  //事件处理函数
  










  clickpageHead:function(e){
    var _this=this;
    var headStr = this.data.pageHomeHeadList
    for (var i = 0; i < headStr.length;i++){
      if (e.currentTarget.id ==i) {
        headStr[i].isClick = true;
      } else {
        headStr[i].isClick = false;
      }
    }
    this.setData({
      pageHomeHeadList:headStr,
    })
  },
  onLoad: function () {
    







    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})
