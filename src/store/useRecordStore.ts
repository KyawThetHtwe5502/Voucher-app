import { create } from "zustand";

type store = {
    records: [],
    addRecord: (record: any) => void,
    changeQuantity:(id:number,quantity: number) => void
}
export const useRecordStore = create<store>()((set) => ({
    records:[],
    addRecord: (record) => set((state) => ({records:[...state.records,record]})),
    changeQuantity:(id,quantity) => set((state) => ({
        records: state.records.map((record) => {
            if(record.id === id){
                const newQuantity = record.quantity + quantity;
                const newCost = newQuantity * record.price
                return {...record,quantity : newQuantity, cost: newCost}
            }
            return record;
        })
    }))
)