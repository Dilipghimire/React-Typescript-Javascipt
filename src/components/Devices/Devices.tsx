import React, { useEffect, useState } from "react";

enum DeviceType {
  Desktop = "desktop",
  iPad = "iPad",
  Mobile = "mobile",
}

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.Desktop);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth >= 1024) {
        setDeviceType(DeviceType.Desktop);
      } else if (innerWidth >= 768) {
        setDeviceType(DeviceType.iPad);
      } else {
        setDeviceType(DeviceType.Mobile);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};
