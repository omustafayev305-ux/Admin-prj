import { useTranslation } from "react-i18next";
import OrdersChart from "./OrdersChart"

function TotalSalesCard() {
  const { t } = useTranslation();

  return (
    <div className="bg-white border rounded-xl p-6">

      <div className="flex justify-between">

        <div>
          <h2 className="font-bold">
            {t("orders")}
          </h2>

          <p className="text-xs text-gray-500 uppercase">
            {t("MONTHLY GOALS:1,000")}
          </p>
        </div>

        <p className="text-2xl font-bold">
         734
        </p>

      </div>
      <div className="mt-6">
      <OrdersChart/>
      </div>
    </div>
  );
}

export default TotalSalesCard;