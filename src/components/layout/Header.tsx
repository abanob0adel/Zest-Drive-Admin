import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <>
      <div className="container py-5">
        <div className="flex items-center justify-between">
          <h2>Zest Drive</h2>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
