import CustomersChart from "./CoustomersChart";
function coustomersCard() {
  return(
    <div className="bg-white border-rounded-xl p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">
            Coustomers
          </h2>
          <p className="text-xs text-gray-500 uppercase">
           This Month
          </p>
        </div>
         <p className="font-bold text-2xl">
          2,571
         </p>
      </div>
      <div mt-6>
      <CustomersChart/>
      </div>
    </div>
  )
} export default coustomersCard;