export default async function id({
    params,
}: {
    
    params: Promise<{ productId: string }>;
    }) {
    const productId = (await params).productId;
    return <h1>Details about level {productId}</h1>;
}