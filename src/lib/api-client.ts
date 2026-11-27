import { env } from "@/config/env"
import ky from "ky"
import { getCSRFToken } from "./django"

export const api = ky.create({
  baseUrl: env.API_URL,
  timeout: 15_000,
  credentials: "include",
  hooks: {
    beforeRequest: [
      async ({ request }) => {
        if (["GET", "HEAD", "OPTIONS"].includes(request.method)) return

        let token = getCSRFToken()
        if (!token) {
          await ky.get(`${env.API_URL}/_allauth/browser/v1/config`, {
            credentials: "include",
          })
          token = getCSRFToken()
        }
        if (token) request.headers.set("X-CSRFToken", token)
      },
    ],
  },
})
