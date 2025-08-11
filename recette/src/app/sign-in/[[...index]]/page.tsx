'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBreadSlice, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function SignInPage() {
  return (
      
    
    <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               p-6 rounded-lg shadow-lg z-50 bg-neutral-900">
                
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full flex-grow space-y-6 bg-neutral-900 bg-[radial-gradient(circle_at_50%_0%,theme(colors.white/10%),transparent)] px-4 py-10 ring-1 ring-inset ring-white/5 sm:w-96 sm:px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               p-6 rounded-lg shadow-lg z-50"
        >
          <header className="text-center">
            <Link href={"/"}><FontAwesomeIcon fontSize={50} scale={"300"} color='white' icon={faBreadSlice} /></Link>
            <h1 className="mt-4 text-xl font-medium tracking-tight text-white">
              Se connecter à Recette
            </h1>
            
          </header>
          <Clerk.GlobalError className="block text-sm text-red-400" />
          <div className="space-y-2">
            <Clerk.Connection
              name="google"
              className="flex w-full items-center justify-center gap-x-3 rounded-md bg-neutral-700 px-3.5 py-1.5 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70"
            >
              
              
              <Clerk.Loading scope="provider:google">
                            {(isLoading) =>
                              isLoading ? (
                               <FontAwesomeIcon font-size={20} icon={faSpinner} spin/>
                              ) : (
                                <>
                                 <FontAwesomeIcon icon={faGoogle} /> Google
                                </>
                              )
                            }
                          </Clerk.Loading>
            </Clerk.Connection>
          </div>
          
          
        </SignIn.Step>
        <div id="clerk-captcha" data-cl-theme="dark" data-cl-size="flexible" data-cl-language="fr-FR" />
      </SignIn.Root>
    </Card>
  )
}