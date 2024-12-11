import { Product } from "@/components/ProductList";
import { create } from "zustand";

interface Record {
    id: number;
    product: Product;
    quantity: number;
    cost: number;
  }
  
type store = {
    records: Record[];
    addRecord: (record: Record) => void;
    changeQuantity:(id:number,quantity: number) => void;
    resetRecord: () => void;
}
export const useRecordStore = create<store>(
    (set) => ({
        records:[],
        addRecord: (record) => set((state) => ({records:[...state.records,record]})),
        changeQuantity:(id,quantity) => set((state) => ({
            records: state.records.map((record) => {
                if(record.id === id){
                    const newQuantity = record.quantity + quantity;
                    const newCost = newQuantity * record.product.price
                    return {...record,quantity : newQuantity, cost: newCost}
                } else {

                    return record;
                }
            })
        })),
        resetRecord: () => set({records: []})
    }))