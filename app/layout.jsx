import "@/assets/styles/globals.css";

export const metadata = {
  title: "Homepage",
  keywords: "rental, property, real-state",
  description: "Real-state website",
};
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
