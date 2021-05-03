import Transaction from "models/transaction";
import api from "utils/clientApi";

export default class TransactionService {

  public async save(transaction: Transaction) : Promise<Transaction> {
    try {
      const saveEndpoint = transaction.type === "ENTRADA" ? "incoming" : "outgoing";
      const newTransaction: Transaction = await api.post(`${saveEndpoint}/transaction`, transaction)

      return newTransaction
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  public async list():Promise<Transaction[]> {
    try {
      const response = await api.get(`/transaction`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

}