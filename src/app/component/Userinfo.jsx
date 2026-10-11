import Image from 'next/image.js';
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
            user ? <div className='flex items-center gap-5'>


<div className='flex flex-col gap-2 items-center'>
<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full">
    <Image
      alt="User Avatar"
      src={user?.image || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAANlBMVEXl5uivtLirsbXd4eLo6eu0ub2prrLh4+XS1di5vcGttLrIzM/Z293FyczP0tWrsbe/w8fo6uggvnXAAAAENklEQVR4nO2c27LqIAyGSxpKoZTW93/ZDa1rbXVZBYIBZ/pdOl78E0MCOdh1JycnJycnJycnJycnJyd1QU9tDTEEmcracbRWta056HRaDMMAw4ZZnVVdk4qxs5NeFhA3AICebHt6EUctYBF/8J9p25pHjPKJ0l/F0jYkF60ejrUGucOsmtHrJLwUu5nXNSJXv9W66V1r6wxYCSZGrQDdVzevlULEqfXeUNl50YoXseABs4iqctFGuewNNUNZ/yrKPkWremrjosEtsNYyLq7JYoUYKsVdHF8nsAMWW0WtkpGR6x6o4ro4L1lqBbgKYm2W1A1+415yjtiGgZn9oKmsI1bJuLjmOe0Ot3EVQSt7RsMp12s3YGQ1rtIk2y68N/NwqyXB6QroSI7gbwus6Tc72F7hDblURxCSUa0imtYbl09sZymJbFfL9+QhRttNLV/ExZmsVkx8atPfY3/gCwqoU5+6f+F7TSI5gLGqpYtlte3pCZ9T+1W2LRATGCMY9QomWLPDd2XevArYnVrG6zipmLCr5RPbqa+6jdNfOpxF5y97RRIKjDusxRpi9YO5L/ldlSXsSbaVzCVRXClXBfZyM+mR3jOL7S7Z9zCz8Hf4vqtL4vNZbgdqriAWv6q759Nv3kHjjbX/5WZ1pfmbZVdURsdf1xunSG4/LNxZ7BZMyxGm7qSKf6El+IIxjDXmA7nxYhsYZ/Q5LdK8S32xW5aImwysOa50yyzeJGHvsYzFmTdcxjcTrWJYG/CCH1A5OHIHY8QgXFvT2HiZ5PPjBkK61iaxw5T7uMrlYXQcQM5jW3b9Abt+nPV1eyAQBvL7NrVeCUsPo/OMYdWhZaX7yssdtQUdsK289MGs0zTNnmkK9u375pZ2EHs7rVr+RgGA/wFN6nUa+yYWCBBVECpggOOR7MUfPJDrWHdnx5vUxwAJS0xlYfHW1quzdU6et6rzv/1hCnuK/7Kc2bd2Lqp3csgrM8IgZs61KFTjKghlMBP2uJiOHXZOx17AD9TuGZnDI9S80BuRAYD1ww6BdqKZlVEvdlPcoyaaRXzslo5jYa078yfMi3Ylt0ufAh94WGBJh73Dv4TWsuEMif2xN4AsWiV1Agxlqv01xj/gC2550ocn3gK6TJ8HyQ3zOLll6k6RhaMCeunOi5ZLrDADdd2IUWyAtimXtFJaAKCU9lDxig3OkC83o2dDlUs4aiyh60GuyJ24mT9zjXkN5PWokto1JeXmzAMgfUItl5yTRhpFoZHuuq6e2PT5K1VgfDmX5DBWYluEQqJp64pNy8C1TWuSgm696HUlaVe9YkC4qk1oCqsKF4QHEv5lIfm/R8oTv+ZZYEGggNxotbWVBobYJzB9P6AAEHm3KbB7UYLIwbHaqeFKZILAj1bo4ol03NqJbMfEXcRoA+zliLrZhIoHNEDsMGnfBo2Mj520yD+MBTtN1zt9GAAAAABJRU5ErkJggg=="}
      width={40}
      height={40}
    />
  </div>
</div>

<h2>( {user.name} )</h2>
</div>


<button onClick={hendleShignOut} className='btn btn-error text-sm text-white bg-red-700 btn-xs'> সাইন আউট </button>

                 </div> :  <div>
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