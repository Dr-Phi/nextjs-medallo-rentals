import "@/assets/styles/globals.css";

export const metadata = {
  title: "MedalloRentals | Find the perfect spot",
  description: "Find your dream rental property",
  keywords:
    "rental, find rentals, find properties, properties in medellin, rentals in medellin, poblado rentals, laureles properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
