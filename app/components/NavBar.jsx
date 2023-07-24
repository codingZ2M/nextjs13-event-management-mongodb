"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const NavBar = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);
  const[userToggleButton, setUserToggleButton] = useState(false);

  useEffect( ()=> {
    const obtainProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    }
    obtainProviders();
}, [])


  return (
    <nav className='w-full flex justify-between py-4 px-4 bg-white'>
       <Link href ="/" className='flex items-center'>
            <span className='text-small sm:text-xl'>CZ2M Event Management</span>
        </Link>

         {/* Desktop Navigation */}
         <div className='hidden sm:flex'>
         { session?.user ? (
                <div className='flex sm:gap-5'>
                    <div className='flex items-center justify-center'>
                        <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 sm:mx-3 lg:my-0">Home</Link>
                        <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 sm:mx-3 lg:my-0">Services</Link>
                        <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 sm:mx-3 lg:my-0">Team</Link>
                        <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 sm:mx-3 lg:my-0">Packages</Link>
                        <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 sm:mx-3 lg:my-0">Contact</Link>
                        <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 sm:mx-3 lg:my-0">FAQ</Link>
                     </div>
                
                    <Link href="/create-event" 
                            className="bg-[#14213D] text-sm text-white py-2 px-4 rounded-lg shadow-lg font-normal hover:bg-blue-400 hover:text-[#14213D] transition duration-300 items-center justify-center"> 
                        Create Event
                    </Link>
                    <button type='button' onClick={signOut} className='bg-[#ffffff] text-sm text-[#14213D] py-2 px-4 rounded-lg shadow-lg font-normal hover:bg-[#14213D] hover:text-[#ffffff] transition duration-300 border border-[#14213D]'>
                        Sign Out
                    </button>
                    <Link href="/user">
                        <Image src={session?.user.image} width={35} height={35} className='rounded-full' alt="User Profile"/>
                    </Link>
                </div>
               ) : (
                <>
                    { providers && 
                        Object.values(providers).map( (provider) => 
                           (
                                <button type='button' key={provider.name} onClick={()=> signIn(provider.id)}
                                    className='bg-[#ffffff] text-sm text-[#14213D] py-2 px-4 rounded-lg shadow-lg font-normal hover:bg-[#14213D] hover:text-[#ffffff] transition duration-300 border border-[#14213D]'>
                                    Sign In
                                </button>  
                            )
                        )
                    }
                </>
               )
                }
         </div>

          {/* Mobile Navigation */}
        <div className='flex sm:hidden relative'>
            { session?.user ? (
                <div className='flex bg-white cursor-pointer'>
                  <div>
                    <Image src={session?.user.image} width={35} height={35} className='rounded-full' alt="User Profile"
                        onClick={()=>setUserToggleButton((prev)=> !prev)} />
                   </div>
                     {userToggleButton && (
                        <div className='flex flex-col shadow-lg w-60 h-42 p-4'>
                             <div className='flex flex-col my-2 justify-center'>
                                <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 my-1">Home</Link>
                                <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 my-1">Services</Link>
                                <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 my-1">Team</Link>
                                <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 my-1">Packages</Link>
                                <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 my-1">Contact</Link>
                                <Link href="/" className=" text-sm font-normal text-[#14213D] hover:text-blue-400 my-1">FAQ</Link>
                             </div>
                            <Link href='/user' className='text-sm font-normal' onClick={()=> setUserToggleButton(false)}>
                                User Profile
                            </Link> 
                            <Link href='/create-event' className='text-sm font-normal' onClick={()=> setUserToggleButton(false)}>
                                Create Event
                            </Link> 
                          
                            <button type='button'
                                 onClick={()=> {
                                            setUserToggleButton(false); 
                                            signOut();
                                            }} 
                                 className='mt-5 w-full bg-[#ffffff] text-sm text-[#14213D] py-2 px-4 rounded-lg shadow-lg font-normal hover:bg-[#14213D] hover:text-[#ffffff] transition duration-300 border border-[#14213D]'>
                                Sign Out
                            </button>
                        </div>
                     )}
                </div>
                ) :
                <>
                    { providers && 
                        Object.values(providers).map( (provider) => 
                           (
                                <button type='button' key={provider.name} onClick={()=> signIn(provider.id)}
                                    className='bg-[#ffffff] text-sm text-[#14213D] py-2 px-4 rounded-lg shadow-lg font-normal hover:bg-[#14213D] hover:text-[#ffffff] transition duration-300 border border-[#14213D]'>
                                    Sign In
                                </button>  
                            )
                        )
                    }  
                </>
            }
        </div>
    </nav>
  )
}

export default NavBar