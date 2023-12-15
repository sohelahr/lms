import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p className='text-3xl font-medium text-sky-700'>
        Hello this is protected page
      </p>
      <UserButton afterSignOutUrl="/"/>
    </div>
    
  )
}
