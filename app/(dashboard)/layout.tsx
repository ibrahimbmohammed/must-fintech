import Providers from "@store/provider";
import "@styles/globals.css";
import localFont from "next/font/local";
import ToastContainerWrapper from "@molecules/m-toast-wrapper";
import DashboardLayout from "@layout/dashboard";

/**
 * Documentaion for the dashboard layout
 * @example
 * any component added to this layout would appear in every dashboard pages of the application.
 * related pages such as. localhost:dashboard/audit, etc.
 *
 */

const pretendard = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Pretendard-Thin.otf",
      weight: "100",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Light.otf",
      weight: "200",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Regular.otf",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/Pretendard-SemiBold.otf",
      weight: "700",
    },
    {
      path: "../../public/assets/fonts/Pretendard-Bold.otf",
      weight: "900",
    },
    {
      path: "../../public/assets/fonts/Pretendard-ExtraBold.otf",
      weight: "1000",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata = {
  title: "User Management",
  description: "User Management",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${pretendard.variable} font-sans`}>
          <DashboardLayout>
            <ToastContainerWrapper />
            <div className="">{children}</div>
          </DashboardLayout>
        </body>
      </Providers>
    </html>
  );
}

export default Layout;
