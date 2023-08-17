import { VERIFY_USER } from '../utils/constUrls'

import instance from '../lib/axios'

export const userNumberVerify = async (tokenId: string) => {
  try {
    console.log(tokenId, 'tokenid')

    const Response = await instance.post(
      VERIFY_USER,
      JSON.stringify({ idToken: tokenId }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(Response, 'responseeeeee')
    return Response
  } catch (error) {
    console.log(error)
  }
}

export const userRegisterLogin = async (body: any) => {
  const response = await instance.post('/register', body)
  console.log(response, 'registerResponse--------')
  return response
}

export const categoryBaseFoodItem = async (categoryId: string) => {
  console.log(categoryId);
  
  const {data} = await instance.get(`/menu/${categoryId}`)

  return data
}
