
export const depositMoney=(amount)=>{
    console.log('testdeposit')
   return  {
       type :'deposit',
       payload: amount
    }
  
}


export const withdrowMoney=(amount)=>{
    console.log('testdeposit111')
    return{
       type :'withdrowM',
       payload: amount
   }
}

export const reseteMoney = (amount)=>{
    return{
        type:'resete',
        payload:amount
    }
}