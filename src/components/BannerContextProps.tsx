import React, { createContext, useContext, useState } from "react";

interface BannerContextProps {
  isBannerOpen: boolean;
  setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BannerContext = createContext<BannerContextProps | undefined>(undefined);

export const BannerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <BannerContext.Provider value={{ isBannerOpen, setIsBannerOpen }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBannerContext must be used within a BannerProvider");
  }
  return context;
};
