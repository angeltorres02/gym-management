import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  const passwordPepper = password + process.env.PEPPER_SECRET;
  const hashedPassword = await bcrypt.hash(passwordPepper, SALT_ROUNDS);
  return hashedPassword;
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const passwordPepper = password + process.env.PEPPER_SECRET;
  const isValid = await bcrypt.compare(passwordPepper, hashedPassword);
  return isValid;
}
