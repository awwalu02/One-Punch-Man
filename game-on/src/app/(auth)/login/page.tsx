import Metadata from 'next'

export const metadata = {
    title:'Login'
  }
export default async function loginPage() {
    return <>
        <h1>Login</h1>
        <p>Login to your account to save your progress</p>
    </>
}