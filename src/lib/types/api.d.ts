
// In case of success, the data type must contain (message:'success')
// then we send the rest of data as a generic to the <T> which extends
// the interface with the sent data
declare type SuccessfulResponse<T> = {
  message:'success'
} & T

// But in case of failure, the returned data according to the api
// will be message with the error info, and a code of the error
declare type ErrorResponse = {
  message:string,
  code:number
}

// we give the api response 'APIResponse<T>' type, and we handle
// if it's a success or failure using if() statements
declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse

/*
for example in the nextauth authorize

  const res = await fetch('api/v1/url')
  const data = await res.json()

  *- code property is unique to 'ErrorResponse 'which ensures that the response is 'ErrorResponse'-*
  if('code' in data){
    throw new Error(data.message)
  }

  *-if response isn't 'ErrorResponse' then it's a 'SuccessfulResponse'-*
  else{
    return data
  }
*/ 