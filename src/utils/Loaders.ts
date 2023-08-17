import { categoryOnly } from "../api/admin"


export const categoryLoader= async  ()=> {
    const {data} = await categoryOnly()

    return data
}