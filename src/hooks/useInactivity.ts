import React, { useCallback } from "react";

interface InactivityProps {
  warnTime: number;
  logoutTime: number;
}
export const useInactivity = ({ warnTime, logoutTime }: InactivityProps) => {
  const [showWarningMessage, setShowWarningMessage] = React.useState(false);
  const logoutTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const warnTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const [events] = React.useState([
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ]);

  let warnTimeout: any;
  let logoutTimeout: any;
  const clearTimeoutT = useCallback(() => {
    if (warnTimeout) {
      clearTimeout(warnTimeout);
    }
    if (logoutTimeout) {
      clearTimeout(logoutTimeout);
    }
  }, [logoutTimeout, warnTimeout])

  const warn = () => {
    setShowWarningMessage(true);
  };


  const destroy = useCallback(() => {
    clearTimeoutT();
    for (var i in events) {
      window.removeEventListener(events[i], resetTimeout);
    }
     // eslint-disable-next-line
  }, [clearTimeoutT,events])

  const logout = useCallback(() => {
    localStorage.clear();
    window.location.reload();
    destroy();
  }, [destroy])

  const setTimeoutT = useCallback(
    () => {
      if (logoutTimeoutRef.current !== null) {
        window.clearTimeout(logoutTimeoutRef.current);
      }
      logoutTimeoutRef.current = setTimeout(logout, logoutTime);
      if (warnTimeoutRef.current !== null) {
        window.clearTimeout(warnTimeoutRef.current);
      }
      warnTimeoutRef.current = setTimeout(warn, warnTime);
  }, [logout, logoutTime, warnTime])

  const resetTimeout = useCallback(() => {
    clearTimeoutT();
    setTimeoutT();
  }, [clearTimeoutT, setTimeoutT])

  React.useEffect(() => {
    for (var i in events) {
      window.addEventListener(events[i], resetTimeout);
    }
    setTimeoutT();
    return () => {
      clearTimeoutT();
    };
  },[setTimeoutT, clearTimeoutT, events, resetTimeout]);

  return {showWarningMessage, setShowWarningMessage}
};
