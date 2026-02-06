import useFormHandler from "@/hooks/useFormhandler"
import { HandleOnSubmit } from "@/types/FormTypes";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type SignupFormData = {
  adminName: string;
  adminEmail: string;
  phoneNumber: string;
  password: string;
}

const useSignup = () => {
  const { formData, setFormData, loading, setLoading, handleOnChange } = useFormHandler<SignupFormData>({
    adminName: "",
    adminEmail: "",
    phoneNumber: "",
    password: ""
  })

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    const normalizedPhoneNumber = formData.phoneNumber.replace(/[\s-]/g, "");

    const normalizedInput = {
      adminEmail: formData.adminEmail.trim().toLowerCase(),
      adminName: formData.adminName.trim(),
      phoneNumber: normalizedPhoneNumber,
      password: formData.password,
    };

    if (
      !normalizedInput.adminEmail ||
      !normalizedInput.password ||
      !normalizedInput.adminName ||
      !normalizedInput.phoneNumber
    ) {
      toast.error("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedInput.adminEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const pakistanPhoneRegex = /^(?:\+92|0)3[0-9]{9}$/;

    if (!pakistanPhoneRegex.test(normalizedInput.phoneNumber)) {
      toast.error("Please enter a valid Pakistani mobile number");
      return;
    }


    if (normalizedInput.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try {
      const { data } = await axios.post("/api/signup", normalizedInput)

      setFormData({
        adminName: "",
        adminEmail: "",
        phoneNumber: "",
        password: ""
      })

      toast.success(data.message)

      console.log(data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error)
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    loading,
    handleOnChange,
    handleOnSubmit
  }
}

export default useSignup