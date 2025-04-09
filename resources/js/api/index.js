import axios from 'axios';



export const getUserList=async(data)=>{
    try {        

        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true
          });

        const fetch = await axios({
            method:'get',
            url:'http://localhost:8000/api/user',
            withCredentials: true,
        })
   
        return fetch.data;
    } catch (error) {
        console.error('Gagal fetch data:', error.message);
    }
}

export const createUser=async(data)=>{
    try {        


        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true
          });

        const fetch = await axios({
            method:'post',
            url:`http://localhost:8000/api/user`,
            data:{
                name:data?.name,
                email:data?.email,
                password:data?.password
            },
            withCredentials: true,
        })

        console.log(fetch)
   
        return fetch.data;
    } catch (error) {
        console.error('Gagal fetch data:', error.message);
    }
}

export const updateUser=async(data)=>{
    
    try {        

        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true
          });

        const fetch = await axios({
            method:'put',
            url:`http://localhost:8000/api/user/${data?.id}`,
            data:{
                name:data?.name,
                email:data?.email,
                password:data?.password
            },
            withCredentials: true,
        })
   
        return fetch.data;
    } catch (error) {
        console.error('Gagal fetch data:', error.message);
    }
}

export const deleteUser=async(id)=>{
    try {        
        console.log(id,'di')

        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true
          });

        const fetch = await axios({
            method:'delete',
            url:`http://localhost:8000/api/user/${id}`,
            withCredentials: true,
        })
   
        return fetch.data;
    } catch (error) {
        console.error('Gagal fetch data:', error.message);
    }
}