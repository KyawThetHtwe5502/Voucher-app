import { create } from "zustand";

type store = {
    records: [],
    addRecord: (record: any) => void
}
export const useRecordStore = create<store>()((set) => ({
    records:[],
    addRecord: (record) => set((state) => ({records :[...state.records,record]}))
})
)