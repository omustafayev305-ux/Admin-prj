import{Button,Form,Input,} from "antd"
import { useNavigate } from "react-router-dom";

function Login () {
 const navigate = useNavigate()
  return (
     <div className="min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-[550px] min-h-screen bg-white px-12 pt-10">
        <div className="flex items-center justify-center mb-28">
          <h1 className="text-3xl font-bold text-[#111827]">
           Admin
          </h1> 
        </div>
        <Form
        layout="vertical"
        onFinish={(values) => {
         console.log(values)
         navigate("/dashboard")
        }}
        >
      <Form.Item 
       label="Email"
       name="email"
       rules={[
        {
          required:true,
          message:"Email daxil edin",
        },
        {
          type:"email",
          message:"Duzgun email daxil edin"
        }
       ]}
       >
        <Input
        size="large"
        className="h-16"
       
        />
       </Form.Item>
      <Form.Item
  label="Password"
  name="password"
  rules={[
    {
      required: true,
      message: "Sifre daxil edin",
    },
    {
      min: 6,
      message: "Sifre minimum 6 simvol olmalidir",
    },
  ]}
>
        <Input.Password
        size="large"
        className="h-16"
        />
       </Form.Item>
       <Form.Item className="mt-14">
        <Button
       type="primary"
       htmlType="submit"
        className="w-full !h-16 !bg-[#111827] !text-white !border-none !text-lg !font-medium"
      >
        Login
      </Button>
        </Form.Item>
        </Form>
      </div>

     </div>
  )
}
export default Login;