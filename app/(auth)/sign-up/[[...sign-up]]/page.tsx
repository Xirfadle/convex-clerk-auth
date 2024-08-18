import { SignUp } from "@clerk/nextjs";
import AuthLayout from "../../AuthLayout";

export default function page() {
 return (
  <AuthLayout>
   <SignUp />
  </AuthLayout>
 );
}
