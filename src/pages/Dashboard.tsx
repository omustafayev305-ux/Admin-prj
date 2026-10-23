import { Button } from "antd";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import TotalSalesCard from "../components/TotalSalesCard";
import CoustomersCard from "../components/CustomersCard";

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
          

          
          <div className="bg-white border rounded-xl p-6">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">
                  {t("customers")}
                </h2>

                <p className="text-xs text-gray-500 uppercase">
                  {t("thisMonth")}
                </p>
              </div>

              <p className="text-2xl font-bold">
                2,571
              </p>
            </div>
          </div>

         
          <div className="bg-white border rounded-xl p-6">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">
                  {t("orders")}
                </h2>

                <p className="text-xs text-gray-500 uppercase">
                  Monthly goals: 1,000
                </p>
              </div>

              <p className="text-2xl font-bold">
                734
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;