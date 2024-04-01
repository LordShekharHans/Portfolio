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
            className={`w-6 flex items-center h-[3.5rem] px-6 rounded-3xl bg-n-9/40 backdrop-blur border border-n-1/10 ${
                className || ""
            } text-base`}
        >
            {isOnline ? (
                <WifiIcon className="w-5 h-5 mr-4 text-green-500" />
            ) : (
                <WifiOffIcon className="w-5 h-5 mr-4 text-red-500" />
            )}

            {isOnline
                ? "Hurray! System Connection Established 🚀"
                : "Oops! System Connection Lost 💤"}
        </div>
    );
};

export default Generating;
