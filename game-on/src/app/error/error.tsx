'use client';

export default function ErrorPage({error, reset}: {error: Error; reset: () => void;}){
    return<>
    <h2><p>{error.message}</p></h2>
    <button onClick={() => reset()}>Resolve</button>
    </>
}