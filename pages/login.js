import React from 'react'
import styles from "../styles/Login.module.css"
import { providers, signIn, signOut, useSession, } from 'next-auth/client';
import Link from "next/link"

export default function login() {
    const [session] = useSession()

    return (
        <div className={styles.container}>
            <button className={styles.loginButton}>Login With Google</button>
            <button className={styles.loginButton} onClick={() => signIn("github")}>Login With GitHub</button>
        </div>
    )
}
