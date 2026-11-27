import { VerifyEmail } from "@/features/auth/components/verify-email"

export default async function VerifyEmailPage({
  params,
}: {
  params: Promise<{ key: string }>
}) {
  const { key } = await params

  return <VerifyEmail verificationKey={decodeURIComponent(key)} />
}
