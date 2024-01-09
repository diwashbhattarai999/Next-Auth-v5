import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div
      className="
        h-full w-full flex flex-col gap-y-10 items-center justify-center 
        bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-600 to-neutral-900
    "
    >
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
