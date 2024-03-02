import Mobilenav from "@/components/shared/Mobilenav";
import Sidebar from "@/components/shared/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <Mobilenav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
