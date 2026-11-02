import {Breadcrumb,Button,Form,Input} from "antd"
import Sidebar from "../components/Sidebar"

function Settings() {
  return(
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Sidebar/>
      <main className="flex-1 p-10">
        <div className="mb-8">
          <Breadcrumb
          items={[
            {
              title:"Admin"
            },
            {
             title:"Settings"
            }
          ]}
          />
        </div>
         <div className="bg-white border rounded-xl overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold">
              Settings
            </h1>
          </div>

          <div className="p-8">
            <Form
              layout="vertical"
              className="max-w-[320px]"
              onFinish={(values) => {
                console.log(values);
              }}
            >
              <Form.Item
                label="Site Name"
                name="siteName"
              >
                <Input className="h-11" />
              </Form.Item>

              <Form.Item
                label="Support Email"
                name="supportEmail"
              >
                <Input className="h-11" />
              </Form.Item>

              <Form.Item
                label="Monthly Order Goal"
                name="monthlyGoal"
              >
                <Input className="h-11" />
              </Form.Item>

              <Form.Item className="mt-12">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-[#111827] !border-none !h-11"
                >
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
        
