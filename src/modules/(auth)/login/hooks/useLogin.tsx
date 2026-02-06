import useFormHandler from "@/hooks/useFormhandler"
import { HandleOnSubmit } from "@/types/FormTypes";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

type LoginFormData = {
  adminEmail: string;
  password: string;
}

const useLogin = () => {
  const { formData, setFormData, loading, setLoading, handleOnChange } = useFormHandler<LoginFormData>({
    adminEmail: "",
    password: ""
  })

  const handleOnSubmit = async (e: HandleOnSubmit) => {
    e.preventDefault();
    setLoading(true);

    const normalizedInput = {
      adminEmail: formData.adminEmail.trim().toLowerCase(),
      password: formData.password,
    };

    if (!normalizedInput.adminEmail || !normalizedInput.password) {
      toast.error("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedInput.adminEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (normalizedInput.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }


    try {
      const { data } = await axios.post("/api/login", normalizedInput)

      setFormData({
        adminEmail: "",
        password: ""
      })

      toast.success(data.message)

      console.log(data.message);
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

export default useLogin