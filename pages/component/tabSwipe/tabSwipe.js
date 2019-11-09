const app = getApp()
const SCREEN_WIDTH = app.globalData.systemInfo.screenWidth
Component({
  properties: {
    slots: {
      type: Array,
      value: [],
    }, //{title,sName}
    lineColor: {
      type: String,
      value: 'transparent' // 导航栏下划线，默认隐藏
    },
    selColor: {
      type: String,
      value: 'blue'
    },
    color: {
      type: String,
      value: 'black'
    },
    // 各种样式，以字符串形式传入
    swiperStyle: String,
    tabStyle: String,
    underlineStyle: String,
    headerStyle: String,
    activeTabStyle: String,
    currentTabIndex: Number, // 栏目初始索引
  },

  options: {
    multipleSlots: true
  },

  data: {
    tabScrollPositionArr: [], // 存储滚动条在tab的位置
    tabScrollWidthArr: [], // 存储滚动条的宽度
    screenWidth: SCREEN_WIDTH
  },

  attached() {
    this.getTextRect()
  },

  methods: {
    // 获取tab位置以及宽度
    getTextRect() {
      const query = this.createSelectorQuery()
      query.selectAll('.tab').boundingClientRect()
      query.select('.tab-header').boundingClientRect()
      query.exec((res) => {
        let { tabScrollPositionArr, tabScrollWidthArr } = this.data
        for (let tab of res[0]) {
          tabScrollPositionArr.push(tab.left - res[1].left)
          tabScrollWidthArr.push(tab.width)
        }
        this.setData({
          tabScrollWidthArr,
          tabScrollPositionArr,
        })
      })
    },
    tabTap(e) {
      const tab = e.currentTarget.dataset.tab
      this.setData({
        currentTabIndex: tab
      })
    },
    tabChange(e) {
      this.setData({
        currentTabIndex: e.detail.current
      })
    },
    tabFinish() {
      console.log('滑动结束') 
      // 滑动结束之后的事件
    }
  }
})
