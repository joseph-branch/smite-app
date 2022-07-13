import { SessionContext } from "../../common/contexts/SessionContext";
import { useContext } from "react";

export const useSessionContext = () => useContext(SessionContext);
