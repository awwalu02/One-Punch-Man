import { notFound } from "next/navigation";
export default async function reveiws({
    params,
}: {

    params: Promise<{ reveiwId: string; productId: string }>;
}) {
    const { reveiwId, productId } = (await params);
    if (parseInt(reveiwId) > 1000) {
        notFound();
    }
    return (
        <h1>Details about level {productId} are {reveiwId}</h1>
    );
}