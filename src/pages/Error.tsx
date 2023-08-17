import { useRouteError } from "react-router-dom"

type ErrorType = {
    message: string;
    statusText?: string
  };


export const Error = () => {
     
   const error =useRouteError() 
    return (
        <>
            <div>
                <h1>oops!</h1>
                <p>Sorry an unecpected error has Occureed.</p>
                <i>{error.statusText||error.message }</i>
            </div>        
        </>
    )
}