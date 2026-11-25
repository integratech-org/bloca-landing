import { env } from "@/config/env"
import ky, { HTTPError } from "ky"

export const api = ky.create({
  baseUrl: env.API_URL,
  timeout: 15_000,
  hooks: {
    beforeError: [
      async ({ error }) => {
        if (error instanceof HTTPError) {
          const body = await error.response
            .clone()
            .json()
            .catch(() => ({}))
          error.message = body.message ?? `HTTP ${error.response.status}`
          error.data = body
        }
        return error
      },
    ],
  },
})
