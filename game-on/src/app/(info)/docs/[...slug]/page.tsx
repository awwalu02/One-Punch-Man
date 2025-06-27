export default async function Docs({
    params,
}: {
        params: Promise<{ slug: string[] }>;
    }) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <h1>details of stage {slug[0]} level {slug[1]}</h1>
        );
    } else if (slug?.length === 1) {
        return (
            <h1>Details of stage {slug[0]}</h1>);
    }
    return <h1>Your Files</h1>
}