import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import TotalSalesCard from "../components/TotalSalesCard";
import CoustomersCard from "../components/CustomersCard";
import OrdersCard from "../components/OrdersCard";
import BestSellingCard from "../components/BestSellingCard";
import RecentOrders from "../components/RecentOrders";

function Dashboard() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex min-h-screen bg-[#f6f6f6]">

      <Sidebar />

      <main className="flex-1 p-10">
     
        <div className="flex justify-between items-center mb-10">

          <div className="text-sm text-gray-600">
            Admin / {t("dashboard")}
          </div>

          
          <div className="flex gap-2">
            <Button
              onClick={() => {
                i18n.changeLanguage("en");
                localStorage.setItem("language", "en");
              }}
            >
              EN
            </Button>

            <Button
              onClick={() => {
                i18n.changeLanguage("az");
                localStorage.setItem("language", "az");
              }}
            >
              AZ
            </Button>
          </div>

        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <TotalSalesCard />
          <CoustomersCard/>
          <OrdersCard/>
          <BestSellingCard/>
          <RecentOrders/>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;