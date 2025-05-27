import RegisterForm from "@/components/auth/signup"

function RegisterPage() {
  return (
    <div className='w-full py-[100px] flex justify-center items-center px-[20px]'>
      <div className='bg-[#fff] px-[28px] py-[48px] rounded-[12px] shadow-2xl '>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage