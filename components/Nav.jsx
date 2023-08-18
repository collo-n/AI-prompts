"use client";


import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-betwween w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2">
          <Image 
            src="/assets/images/logo.svg"
            alt="Promptly Logo"
            width={30}
            height={30}
            className="object-contain float-left mr-4"
          />
          <p className="logo_text">Promptly</p>
        </Link>
        <div className="sm:flex hidden">
          {isUserLoggedIn ?(
            <div className="flex justify-end gap-3 md:gap5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>
            </div>
          ): (
            <>
            
            </>
          )}
        </div>
    </nav>
  )
}

export default Nav