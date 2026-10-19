import i18n from"i18next"
import { initReactI18next } from "react-i18next"

i18n
.use(initReactI18next)
.init({
  resources: {
    en:{
      translation: {
         dashboard: "Dashboard",
          products: "Products",
          orders: "Orders",
          customers: "Customers",
          reviews: "Reviews",
          settings: "Settings",
          extras: "Extras",
          totalSales: "Total Sales",
          thisMonth: "This Month",
          recentOrders: "Recent Orders",
          bestSelling: "Best Selling",
          viewAll: "View All",
      }
    },
    az:{
      translation: {
          dashboard: "İdarə paneli",
          products: "Məhsullar",
          orders: "Sifarişlər",
          customers: "Müştərilər",
          reviews: "Rəylər",
          settings: "Ayarlar",
          extras: "Əlavələr",
          totalSales: "Ümumi satış",
          thisMonth: "Bu ay",
          recentOrders: "Son sifarişlər",
          bestSelling: "Ən çox satılan",
          viewAll: "Hamısına bax",
        },
      },
    },
    lng: localStorage.getItem("language") || "en",
    fallbackLng:"en",
    interpolation:{
      escapeValue:false,
    },
  })
  export default i18n