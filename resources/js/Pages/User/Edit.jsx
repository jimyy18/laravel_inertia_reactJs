import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import {updateUser} from '../../api'

export default function EditUser({user}) {

  const [formData, setFormData] = useState({
    id: user?.id||'',
    name: user?.name||'',
    email: user?.email||'',
    password: '',
  });

  const handleChange = (e) => {
 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit=async()=>{
    try {
      const updateData = await updateUser(formData);
  
      // Memeriksa apakah update berhasil
      if (updateData.message === "success") {
        // Jika berhasil, alihkan ke halaman dashboard
        window.location.href = '/dashboard';
      } else {
        console.error("Update failed: ", updateData.message);
      }
    } catch (error) {
      console.error("Error saat pembaruan:", error);
    }

  }

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="flex justify-center ">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg w-full max-w-lg">
            <div className="p-6 text-gray-900">
              <div className="overflow-x-auto">
              <form className="w-full">
                  <div className="flex mb-6">
                    <div className="w-full md:items-center">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="firstName"
                      >
                        Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="firstName"
                        type="text"
                        name="name"
                        placeholder="Jane"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Doe@sample.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                  </div>
                </form>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
