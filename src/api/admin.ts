

import {adminInstance} from '../lib/axios'

export const categoryOnly = async () => {
    try {
      return await adminInstance.get('/categoryOnly')
    } catch (error) {
        console.log(error);
        
    }
}
export const createcategoies= async (body) => {
    try {
        const response = await adminInstance.post('/categories', body, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log(response);
        return response        
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllCategory=async () => {
    try {
        const { data } = await adminInstance.get('/categories')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createfoodItem = async (body:any) => {
    try {
        const response = await adminInstance.post('/foodItems', body, { headers: { 'Content-Type': 'multipart/form-data' } })
        return response
    } catch (error) {
        console.log(error);
        
    }
}

export const getItems = async () => {
    try {
        const response = await adminInstance.get('/items') 
        return response;
    } catch (error) {
        console.log(error);
        
    }
}


export const createTable = async(tableName:string) => {
    try {
        const response = await adminInstance.post('/table', { tableName: tableName },)
        return response
    } catch (error) {
        console.log(error);
        
    }
}

export const getTables = async () => {
    try {
        const response = await adminInstance.get('/table')
        return response;
    } catch (error) {
        console.log(error);
        
    }
}
    
