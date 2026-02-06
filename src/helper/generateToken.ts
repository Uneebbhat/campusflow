import jwt from "jsonwebtoken"

interface GenerateTokenProps {
  id: string
}

const generateToken = async (payload: GenerateTokenProps) => {
  return await jwt.sign({ id: payload.id }, process.env.JWT_SECRET!, { expiresIn: '30d' })
}
export default generateToken