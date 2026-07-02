import { redirect } from "next/navigation";

export default function NotFound() {
    // Instantly redirects any invalid URL back to the home page
    redirect("/");
}
