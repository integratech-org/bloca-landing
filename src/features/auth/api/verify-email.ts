import { api } from "@/lib/api-client"
import { HTTPError } from "ky"

export type VerifyEmailResult = { status: "success" } | { status: "error" }

export async function verifyEmail(
  verificationKey: string
): Promise<VerifyEmailResult> {
  try {
    await api.post("/_allauth/browser/v1/auth/email/verify", {
      json: { key: verificationKey },
    })

    return { status: "success" }
  } catch (err) {
    if (err instanceof HTTPError) {
      const status = err.response.status
      if (status === 400) return { status: "error" }
      if (status === 401) return { status: "success" }
    }

    throw err
  }
}
