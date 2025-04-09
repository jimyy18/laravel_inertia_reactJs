import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import { useEffect,useState } from 'react';
import {getUserList,deleteUser} from '../api'
import { Button } from '@headlessui/react';

export default function Dashboard() {

    const [userData, setuserData] = useState([]);

    const getFatchList=async()=>{
        try {

            const fetch = await getUserList()
            if(fetch?.message==='success'){
                setuserData(fetch.data)
            }
            
        } catch (error) {
            console.error({error:error?.message})
        }
    }

    const handleDelete=async(id)=>{
        const response = await deleteUser(id)
    }

    useEffect(() => {

        getFatchList()

      }, ['']);


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <button  
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline mb-4"
                            onClick={()=>{ window.location.href = 'user/create';}}
                            >Tambah</button>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 font-semibold text-gray-600">#</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Name</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Email</th>
                                    <th className="px-4 py-2 font-semibold text-gray-600">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                
                                {userData.map((datas, index) => (
                                    <tr key={datas.id}>
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{datas.name}</td>
                                    <td className="px-4 py-2">{datas.email}</td>
                                    <td className="px-4 py-2">
                                    <Link   
                                    href={route('user.edit', { id: datas.id })}
                                    className="text-blue-600 hover:underline">
                                        Edit
                                    </Link> || 
                                    <Link   
                                    onClick={()=>handleDelete(datas?.id)}
                                    className="text-blue-600 hover:underline">
                                        Delete
                                    </Link>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
