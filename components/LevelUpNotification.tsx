import React, { useEffect, useState } from "react";

type LevelUpNotificationProps = {
  isVisible: boolean;
  level: string;
};

const LevelUpNotification: React.FC<LevelUpNotificationProps> = ({ isVisible, level }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      // Automatically hide after 2 seconds
      const timeout = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (!show) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-yellow-300 text-black text-2xl font-bold px-6 py-4 rounded-md animate-fade-in-out">
        Level Up!!! Now on {level}
      </div>
    </div>
  );
};

export default LevelUpNotification;
