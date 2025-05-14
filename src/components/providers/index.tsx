import { Toaster } from "sonner";
import NextAuthProvider from "./next-auth-provider/next-auth.provider";
import ReactQueryProvider from "./react-query-provider/react-query-provider";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProps) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <Toaster richColors position="top-center" />
        {children}
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
