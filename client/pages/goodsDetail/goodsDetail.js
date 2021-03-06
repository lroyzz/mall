// pages/goodsDetail/goodSDetail.js
var common = require('../common/js/common.js')
var util = require('../../utils/util.js')
var App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }, {
        link: '/pages/index/index',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      }, {
        link: '/pages/index/index',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    curItem: {
        text: '商品1',
        price: '76.00',
        carriage:'9.00',
        salesVolume:'1322',
        imgurl:"/images/focus_01.jpg",
        size: [{ text: "默认" }, { text: "大码" }, { text: "小码" }],
        colors: [{ text: "默认" }, { text: "蓝色" }, { text: "黄色" }],
        stock :'9999'
    },
    //推荐图
    recommImgs: [
      {
        text: '功能1',
        url: '/images/focus_01.jpg'
      }, {
        text: '功能1',
        url: '/images/focus_02.jpg'
      }, {
        text: '功能1',
        url: '/images/focus_03.jpg'
      }, {
        text: '功能1',
        url: '/images/focus_03.jpg'
      }
    ],
  },
  //购物车
  showModal: function (e) {
    // 显示遮罩层
    var iscart = true;
    if (e.currentTarget.id == "buynow") iscart=false;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      shopCart: animation.export(),
      showModalStatus: true,
      iscart: iscart
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        shopCart: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      shopCart: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        shopCart: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  gotoMain: function (){
    common.switchTabToPage("../index/index")
  },
  gotoKind: function () {
    common.switchTabToPage("../kind/kind")
  },
  addShopCart:function(){
    util.showSuccess("添加成功!")
    this.hideModal();
  },
  buynow: function () {
    util.showSuccess("购物成功!")
    this.hideModal();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})