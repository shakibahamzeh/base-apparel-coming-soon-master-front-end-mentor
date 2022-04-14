export const validate =(data)=>{
    const errors={};
   

    if(!data.email){
        errors.email="email required";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
          errors.email="Please provide a valid email"
    }else{
        delete errors.email
    }
    
    return errors;
}