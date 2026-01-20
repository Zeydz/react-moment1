import "./Header.css";
interface HeaderProps {
  title: string;
}

function HeroHeader({ title }: HeaderProps) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <img className="hero-image" src="https://images.unsplash.com/photo-1768310481123-9c8e4e6fc61a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Wallpaper" />
    </header>
  );
}

export default HeroHeader;
