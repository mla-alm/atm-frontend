import axios from "axios";
import { backendUrl } from "./url-constants";

export interface DenominationResponse {
  amount: number;
  denominationName: string;
  payBox: "Notes" | "CoinsGreaterThan20mm" | "CoinsLessThanEqual20mm";
  value: number;
}

interface WithdrawalRequest {
  withdrawalAmount: number;
}

class WithdrawalClient {
  async withdraw(amount: number): Promise<DenominationResponse[]> {
    const url = `${backendUrl}/api/withdrawal`;
    const request: WithdrawalRequest = { withdrawalAmount: amount };
    const response = await axios.post<DenominationResponse[]>(url, request);
    return response.data;
  }
}

export default WithdrawalClient;
