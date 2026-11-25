import * as z from "zod"
import "dotenv/config"

const createEnv = () => {
  const EnvSchema = z.object({
    API_URL: z.string(),
  })

  const envVars = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  }

  const parsedEnv = EnvSchema.safeParse(envVars)

  if (!parsedEnv.success) {
    const fieldErrors = z.flattenError(parsedEnv.error).fieldErrors

    throw new Error(
      `Invalid env provided.
  The following variables are missing or invalid:
  ${Object.entries(fieldErrors)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n")}
  `
    )
  }

  return parsedEnv.data ?? {}
}

export const env = createEnv()
