export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-muted/20 bg-background py-6 text-center text-sm">
      <p>&copy; {year} Darren Murphy. All rights reserved.</p>
    </footer>
  );
}