const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
          h-full flex items-center justify-center
          bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-950 via-gray-400 to-gray-950
        "
    >
      {children}
    </div>
  );
};

export default AuthLayout;
