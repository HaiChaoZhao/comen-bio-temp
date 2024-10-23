import { config } from "@/components/common/config"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOssUrl(resourceName: string) {

  return `${config.ossUrl}/${resourceName}`
}