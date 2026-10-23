import { useTranslation } from "react-i18next";
import CoustomersChart from "./CoustomersChart"

function TotalSalesCard() {
  const { t } = useTranslation();

  return (
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
          $4,235
        </p>

      </div>

      <div className="mt-6">
        <CoustomersChart/>
      </div>
        
    </div>
  );
}

export default TotalSalesCard;