"use client";
import { usePathname } from "next/navigation";
export default function Notfound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reveiwId = pathname.split("/")[4];
    return (
        <div>
            <h1>{productId} not available for {reveiwId }</h1>
            <p>Not Found</p>
        </div>
    );
} 