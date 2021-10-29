import { useContext } from "react";
import { ProvidedAuth } from "../context/AuthProvider";

const useAuth = () => {
  return useContext(ProvidedAuth);
};

export default useAuth;
