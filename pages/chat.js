import Link from "next/link";
export default function ChatPage() {
  return (
    <div>
      Chat Page
      <Link href="/">
        <a>Logout </a>
      </Link>
    </div>
  );
}
