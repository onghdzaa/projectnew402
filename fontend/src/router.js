import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register'

import Login from './views/Login'
import Booking from './views/customer/Booking'

import List_Employees from './views/admin/List_Employees'
import Edit_Employees from './views/admin/Edit_Employees'
import List_income from './views/admin/List_income'
import List_Customer from './views/admin/List_Customer'
import List_Price from './views/admin/List_Price'
import Edit_Price from './views/admin/Edit_Price'

import Calendar from './views/admin/Calendar'
// UnClick import status from './views/customer/status' BookingButton BookingConfirm BookingHistory ProfileRider EditProfileRider price  
import BookingButton from './views/customer/BookingButton'
import BookingConfirm from './views/customer/BookingConfirm'
import BookingHistory from './views/customer/BookingHistory'
import BookingStatus from './views/customer/BookingStatus'
import Profile from './views/customer/Profile'
import Rating from './views/customer/Rating'
import Price from './views/customer/Price'
import Edit_Profile from './views/customer/Edit_Profile'
import WorkCalendar from './views/rider/WorkCalendar'
import WorkStatus from './views/rider/WorkStatus'
import WorkStatus2 from './views/rider/WorkStatus2'
import WorkStatus3 from './views/rider/WorkStatus3'
import WorkStatus4 from './views/rider/WorkStatus4'
import WorkStatus5 from './views/rider/WorkStatus5'
import UnClick from './views/rider/UnClick'
import ProfileRider from './views/rider/ProfileRider'
import EditProfileRider from './views/rider/EditProfileRider'
import NoBooking from './views/customer/NoBooking'
// 

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home',component: Home },
     {path:'/register', name:'register',component:Register} ,
     {path:'/login', name:'login',component:Login},

     {path:'/admin', name:'equipment-list',component:List_Employees},
     {path:'/admin/form', name:'admin-Edit_Employees',component:Edit_Employees,props: true},
     {path:'/admin/List_income', name:'admin-List_income',component:List_income},
     {path:'/admin/List_Customer', name:'admin-List_Customer',component:List_Customer},
     {path:'/admin/List_Price', name:'admin-List_Price',component:List_Price},
     {path:'/admin/Edit_Price', name:'admin-Edit_Price',component:Edit_Price,props: true},
     
     {path:'/customer/Booking', name:'customer-booking',component:Booking},
     {path:'/admin/Calendar', name:'admin-Calendar',component:Calendar}
     ,
     {path:'/customer/BookingButton', name:'BookingButton',component:BookingButton,props: true}
     ,
     {path:'/customer/BookingConfirm', name:'BookingConfirm',component:BookingConfirm,props:true},
     {path:'/customer/BookingHistory', name:'BookingHistory',component:BookingHistory}
     ,
     {path:'/customer/BookingStatus', name:'BookingStatus',component:BookingStatus}
     ,
     {path:'/customer/Profile', name:'Profile',component:Profile} ,
     {path:'/customer/NoBooking', name:'NoBooking',component: NoBooking}
     ,
     {path:'/customer/Edit_Profile', name:'Edit_Profile',component:Edit_Profile}
     ,
     {path:'/rider/WorkCalendar', name:'rider-WorkCalendar',component:WorkCalendar}
     ,
     {path:'/rider/WorkStatus', name:'rider-WorkStatus',component:WorkStatus}
     ,
     {path:'/rider/ProfileRider', name:'rider-ProfileRider',component:ProfileRider}
     ,
     {path:'/rider/EditProfileRider', name:'rider-EditProfileRider',component:EditProfileRider}  ,
     {path:'/rider/WorkStatus2', name:'rider-WorkStatus2',component:WorkStatus2}
     ,
     {path:'/rider/WorkStatus3', name:'rider-WorkStatus3',component:WorkStatus3}
     ,
     {path:'/rider/WorkStatus4', name:'rider-WorkStatus4',component:WorkStatus4},
     ,
     {path:'/rider/WorkStatus5', name:'rider-WorkStatus5',component:WorkStatus5},
     {path:'/customer/Rating', name:'customer-Rating',component:Rating},
     {path:'/customer/Price', name:'customer-Price',component:Price}
     ,
     {path:'/rider/UnClick', name:'rider-UnClick',component:UnClick},
  ]
})
