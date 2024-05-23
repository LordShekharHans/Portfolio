import { useState, useEffect } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";

const Generating = ({ className }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener("online", handleOnlineStatusChange);
        window.addEventListener("offline", handleOnlineStatusChange);

        return () => {
            window.removeEventListener("online", handleOnlineStatusChange);
            window.removeEventListener("offline", handleOnlineStatusChange);
        };
    }, []);

    return (
        <div
            className={`w-full flex items-center sm:h-[3.5rem] h-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-3xl bg-n-9/40 backdrop-blur border border-n-1/10 ${
                className || ""
            } text-sm md:text-sm lg:text-base`}
        >
            {isOnline ? (
                <WifiIcon className="w-5 h-5 sm:mr-2 mr-3 text-green-500" />
            ) : (
                <WifiOffIcon className="w-5 h-5 sm:mr-2 mr-3 text-red-500" />
            )}

            {isOnline
                ? "Hurray! System Connection Established 🚀"
                : "Oops! System Connection Lost 💤"}
        </div>
    );
};

export default Generating;
