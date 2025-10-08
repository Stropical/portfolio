import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix static asset paths with NEXT_PUBLIC_BASE_PATH if set (useful for GitHub Pages / subpath deploys)
 */
export function asset(path: string) {
  if (!path) return path
  // Default to /portfolio so static exports deployed to GitHub Pages use the correct subpath
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio'
  // ensure single leading slash
  if (path.startsWith('/')) path = path.slice(1)
  return `${base}/${path}`.replace(/([^:]?)\/\//g, '$1/')
}
