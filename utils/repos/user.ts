import type { NitroFetchRequest, $Fetch } from "nitropack"

export const userRepo = <T>(fetchInstance: $Fetch<T, NitroFetchRequest>) => {
  getUser: async (id: number) => {
  }
}