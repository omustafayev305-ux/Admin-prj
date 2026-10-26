import { useTranslation } from "react-i18next";
import BestSellingChart from "./BestSellingChart";

function BestSellingCard () {
  const { t }= useTranslation()
  return(
   <div className="bg-white border rounded-xl overflow-hidden">
    <div className="p-6 border-b">
      <h2 className="font-bold">
       {t("Bestselling")}
      </h2>
      <p className="text-xs text-gray-500 uppercase mt-1">
       {t("thisMonth")}
      </p>
    </div>
    <div className="p-6">
     <div className="flex items-center gap-2 mb-6">
       <p className="text-2xl font-bold">
        $2,400
       </p>
       <span className="text-gray-400">
        -
       </span>
       <p className="text-sm text-gray-500">
        Total Sales
       </p>
     </div>
     <div className="flex flex-col gap-3 mb-6">
      <div className="border rounded-full px-4 py-2 text-xs w-fit">
        Classic Monochrome Tees — <b>$940 Sales</b>
      </div>
      <div className="border rounded-full px-4 py-2 text-xs w-fit">
        Monochromatic Wardrobe — <b>790 Sales</b>
      </div>
         <div className="border rounded-full px-4 py-2 text-xs w-fit">
            Essential Neutrals — <b>$740 Sales</b>
      </div>
     </div>
     <div className="w-[140px]">
          <BestSellingChart />
        </div>
    </div>
   </div>
  )
}export default BestSellingCard;