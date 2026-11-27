"use client"

import { useEffect, useRef, useState } from "react"
import { verifyEmail, VerifyEmailResult } from "../api/verify-email"
import { EmailVerified } from "./email-verified"
import { LinkInvalid } from "./link-invalid"

export function VerifyEmail({ verificationKey }: { verificationKey: string }) {
  const [result, setResult] = useState<VerifyEmailResult | null>(null)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    verifyEmail(verificationKey).then(setResult)
  }, [verificationKey])

  if (!result) return <span>Verifying...</span>

  return result.status === "success" ? <EmailVerified /> : <LinkInvalid />
}
