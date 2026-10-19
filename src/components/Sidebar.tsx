import {
  AppstoreOutlined,
  InboxOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  StarOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons"

import{useTranslation} from "react-i18next"

function Sidebar () {
  const{t}=useTranslation()
  return(
    <aside className="w-[220px] min-h-screen bg-white border-r px-5 py-6">
      <h1 className="text-2xl font-bold mb-14">
      Admin
      </h1>
      <div className="flex flex-col gap3">
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg">
          <AppstoreOutlined/>
          <span>{t("dashboard")}</span> 
        </div>
        <div className="flex items-center gap-3 px-4 py-3">
        <InboxOutlined/>
        <span>{t("product")}</span>
        </div>
       <div className="flex items-center gap-3 px-4 py-3">
         <ShoppingCartOutlined/>
         <span>{t("orders")}</span>
       </div>
        <div className="flex items-center gap-3 px-4 py-3">
          <TeamOutlined />
          <span>{t("customers")}</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <StarOutlined />
          <span>{t("reviews")}</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <SettingOutlined />
          <span>{t("settings")}</span>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex items-center gap-3 px-4 py-3">
            <PlusOutlined />
            <span>{t("extras")}</span>
          </div>
          </div>
      </div>
    </aside>
  )
} export default Sidebar