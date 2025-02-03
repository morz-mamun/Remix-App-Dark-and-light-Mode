import { Link } from "@remix-run/react"

export default function Logo({ logoPath, smallLogo }: { readonly logoPath: string, readonly smallLogo: string }) {
  return (
    // Logo with Home Link
    <Link to="/" className="flex gap-1 items-center">
      <img src={smallLogo} alt="logo" />
      <img src={logoPath} alt="logo text" className="h-8" />
    </Link>
  )
}
