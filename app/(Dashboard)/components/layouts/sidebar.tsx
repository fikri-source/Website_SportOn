"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBox, FiCreditCard, FiLayers, FiShoppingCart, FiLogOut} from "react-icons/fi";

const Sidebar = () => {         
    const pathname = usePathname();
    const menuItems = [
        { 
            name: "Products",
            icon: FiBox,
            link: "/admin/products" 
        },
        { 
            name: "Categories",
            icon: FiLayers,
            link: "/admin/categories"
        },
        {
            name: "Transactions",
            icon: FiShoppingCart,
            link: "/admin/transactions"
        },
        { 
            name: "Bank Information",
            icon: FiCreditCard,
            link: "/admin/bank-info"
        },
    ];

    return (
        <aside className="w-80 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
           <div className="py-8 px-14 border-b border-gray-200">
             <Image 
               src="/images/logo-admin.svg"
               alt="Logo admin"
               width={215}
               height={36}
              /> 
           </div> 
           <div className="flex flex-col gap-1 mt-12 p-5">
                { menuItems.map((item,index) => {
                    const isActive = item.link === pathname
                    return(
                        <Link 
                            href={item.link} 
                            key={index}
                            className={`flex gap-3 items-center py-2 px-4.5 
                                ${isActive ? "bg-primary/15 text-primary rounded-lg font-md" : "hover:bg-gray-100"}`}
                        >   
                            <item.icon size={24} />
                            <span>{item.name}</span>
                        </Link>
                    )
                })
                }
           </div>
           <Link href="/admin/login" className="flex gap-3 font-medium py-3 px-4.5 mx-5 hover:bg-gray-100 duration-300 rounded-lg mt-auto mb-10">
           <FiLogOut size={24} />
           Logout
           </Link>
        </aside>
    );
};

export default Sidebar;