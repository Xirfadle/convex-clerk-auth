import { SignIn } from "@clerk/nextjs";
import AuthLayout from "../../AuthLayout";

export default function page() {
 return (
  <AuthLayout>
   <SignIn />
  </AuthLayout>
 );
}
