# tabSwipe
一个微信小程序的高性能标签滑动组件  
A high performance component about tab swipe for wechat mini-program

这是一个测试例子，主要展示组件的功能与效果。下载后在熟悉组件使用方法后请将组件提取出来放到自己项目组件文件夹下。

***注意事项***
1. 组件需要获取屏幕宽度，以计算滑动距离，目前组件获取屏幕宽度的代码(tabSwipe.js):
    ```javascript
    const app = getApp()
    const SCREEN_WIDTH = app.globalData.systemInfo.screenWidth
    ```
    可根据自己项目的情况修改屏幕宽度获取方法
    
***测试效果图***  
![](/pages/images/ezgif-2-12949dcd6c5e.gif)
