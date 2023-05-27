import { reactive } from "vue";

export default function () {
  interface ReceiptItem {
    date: string;
    icon: string;
    title: string;
    price: number;
  }

  const receipt: ReceiptItem[] = reactive([]);

  const addReceipt = (item: ReceiptItem) => {
    receipt.unshift(item);
  };

  return { receipt, addReceipt };
}
