import Vue from 'vue'
import Router from 'vue-router'
// 导入账户管理相关页面
import Login from '../components/account/login/Login'
//导入商城相关页面
import Shop from '../components/shop/Shop'
import OrderComplete from '../components/shop/goods/order/Complete'
import OrderPay from '../components/shop/goods/order/Pay'
import OrderSite from '../components/shop/goods/order/Site'

import GoodsDetail from '../components/shop/goods/Detail'
import GoodsList from '../components/shop/goods/List'

import Shopcart from '../components/shop/shopcart/Shopcart'
import SubcomHeader from '../components/shop/subcom/Header'

Vue.use(Router)

let goods = [
  { name:'GoodsList' , path:'goods/list' , component:GoodsList},
  { name: 'GoodsDetail', path: 'goods/detail/:id', component: GoodsDetail}
];
let shopcart = [
  { name: 'Shopcart', path: 'shopcart', component: Shopcart}
];
let order = [
  { name: 'OrderSite', path: 'order/site/:ids', component: OrderComplete },// 需要知道哪些商品要下单
  { name: 'OrderPay', path: 'order/pay/:id', component: OrderPay },// 需要知道订单ID才能付款
  { name: 'OrderComplete', path: 'order/complete', component: OrderComplete}
]
export default new Router({
  routes: [
    //账户管理路由的配置
    {name:'login' , path:'/login' , component:Login},
    //商城路由配置
    { name: 'shop', path: '/', component: Shop, children: [...goods, ...shopcart, ...order] },
  ]
})
