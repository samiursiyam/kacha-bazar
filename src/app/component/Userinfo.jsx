import Image from "next/image";
import { authClient } from '../../lib/auth-client.js';
import Link from 'next/link';
import React from 'react';

const Userinfo = () => {


    const {data : session} = authClient.useSession()
    const user = session?.user



    const hendleShignOut = async()=>{
await authClient.signOut();
    }

    return (
       <div>
        {
            user ? 

            <Link href={"/profile"}>
            <div className='flex items-center gap-5'>


<div className='flex flex-col gap-2 items-center'>
<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full">
    <Image
      alt="User Avatar"
      src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsMjpTVw1d0uLU3pmfOdpRaA6fD7FfCqZ52ko2QZK2A&s=10"}
      width={40}
      height={40}
    />
  </div>
</div>

<h2>( {user?.name} )</h2>
</div>


<button onClick={hendleShignOut} className='btn btn-error text-sm text-white bg-red-700 btn-xs'> সাইন আউট </button>

                 </div> 
                 
                 </Link>
                 :  <div>
             <div className="flex">
              <Link href={"/signin"}>
          <button className="btn btn-ghost btn-sm pr-5 text-gray-700 font-bold text-sm">
            সাইন ইন
          </button>
          </Link>
      <Link href={"/signup"}>

          <button className="btn btn-primary btn-sm bg-green-700 border-none font-bold text-sm">
            সাইন আপ
          </button>
          </Link>
        </div>
        </div>
        }
       </div>
    );
};

export default Userinfo;